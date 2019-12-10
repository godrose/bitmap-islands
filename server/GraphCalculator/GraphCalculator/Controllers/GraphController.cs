using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphCalculator.Domain;
using GraphCalculator.Models;
using Microsoft.AspNetCore.Mvc;

namespace GraphCalculator.Controllers
{
  [Route("api/[controller]")]
  public class GraphController : Controller
  {       
    [HttpPost("solve")]
    public async Task<IActionResult> Update([FromBody] MatrixInfoDto matrixInfo)
    {
      try
      {
        var graph = MapToGraph(matrixInfo);
        var retValue = await Task.Run(() => graph.GetConnectedComponents());
        return Ok(retValue);
      }
      catch (Exception ex)
      {
        return BadRequest($"Unable to update experiment: {ex.Message}");
      }
    }

    private Graph<int> MapToGraph(MatrixInfoDto matrixInfo)
    {
      var nodesMap = matrixInfo.Indexes.ToDictionary(k => k, v => v);
      var graph = new Graph<int>();
      graph.AddNodes(matrixInfo.Indexes);
      for (int i = 0; i < matrixInfo.TotalRows; i++)
      {
        for (int j = 0; j < matrixInfo.TotalColumns; j++)
        {
          var index = GetIndex(i, j, matrixInfo.TotalColumns);
          if (nodesMap.ContainsKey(index))
          {
            var neighborCandidates = GetNeighborCandidates(index, matrixInfo.TotalRows, matrixInfo.TotalColumns);
            foreach (var neighbor in neighborCandidates)
            {
              if (nodesMap.ContainsKey(neighbor.Index))
              {
                graph.AddEdge(index, neighbor.Index);
              }
            }
          }
        }
      }

      return graph;
    }

    private int GetIndex(int row, int col, int totalColumns)
    {
      return row * totalColumns + col;
    }

    private CellInfo GetCellInfo(int index, int totalColumns)
    {
      return new CellInfo
      {
        Index = index,
        Row = index / totalColumns,
        Column = index % totalColumns
      };
    }

    private IEnumerable<CellInfo> GetNeighborCandidates(int index, int totalRows, int totalColumns)
    {
      var rowCandidates = new List<int>();
      var colCandidates = new List<int>();
      var retValue = new List<CellInfo>();

      var cellInfo = GetCellInfo(index, totalColumns);

      rowCandidates.Add(cellInfo.Row);
      if (cellInfo.Row < totalRows)
      {
        rowCandidates.Add(cellInfo.Row + 1);
      }
      if (cellInfo.Row > 0)
      {
        rowCandidates.Add(cellInfo.Row - 1);
      }

      colCandidates.Add(cellInfo.Column);
      if (cellInfo.Column < totalColumns)
      {
        colCandidates.Add(cellInfo.Column + 1);
      }
      if (cellInfo.Column > 0)
      {
        colCandidates.Add(cellInfo.Column - 1);
      }
      foreach (var row in rowCandidates)
      {
        foreach (var col in colCandidates)
        {
          if (row != cellInfo.Row || col != cellInfo.Column)
          {
            retValue.Add(new CellInfo { Index = GetIndex(row, col, totalColumns),  Row = row, Column = col });
          }
        }
      }
      return retValue;
    }

    struct CellInfo
    {
      public int Index { get; set; }
      public int Row { get; set; }
      public int Column { get; set; }
    }    
  }
}
