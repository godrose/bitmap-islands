using System.Reflection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace GraphCalculator
{
  /// <summary>
  /// Entry point for the program
  /// </summary>
  public class Program
  {
    /// <summary>
    /// The entry point of the program, where the program control starts and ends.
    /// </summary>
    /// <param name="args">The command-line arguments.</param>
    public static void Main(string[] args)
    {
      Assembly.GetCallingAssembly().SetWorkingDir();
      CreateHostBuilder(args).Build().Run();
    }

    private static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
              webBuilder
                      .UseStartup<Startup>()
                      .UseConfiguration(Assembly.GetExecutingAssembly().BuildConfiguration());
            });
  }
}
