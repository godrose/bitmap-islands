using LogoFX.Server.Bootstrapping;
using Microsoft.Extensions.DependencyInjection;

namespace GraphCalculator
{
  internal sealed class Bootstrapper : BootstrapperBase
  {
    public Bootstrapper(IServiceCollection dependencyRegistrator) : base(dependencyRegistrator)
    {
    }
  }
}
