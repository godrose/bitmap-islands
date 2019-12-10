using System.IO;
using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.PlatformAbstractions;
using Microsoft.OpenApi.Models;
using Solid.Practices.Modularity;

namespace GraphCalculator
{
  public class Module : ICompositionModule<IServiceCollection>
  {
    public void RegisterModule(IServiceCollection dependencyRegistrator)
    {
      dependencyRegistrator        
                .AddCors(options => options.AddPolicy("AllowAny",
                    builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()))
                .AddAuthentication();
      dependencyRegistrator.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
        var basePath = PlatformServices.Default.Application.ApplicationBasePath;
        var xmlPath = Path.Combine(basePath, $"{Assembly.GetExecutingAssembly().GetFileName()}.xml");
        c.IncludeXmlComments(xmlPath);
      });
    }
  }
}
