var go = function(context) {
  try { AlignTo.go(context); }
  catch(e) {
      if(Mocha.sharedRuntime().loadFrameworkWithName_inDirectory('AlignTo', NSBundle.bundleWithURL(context.plugin.url()).resourceURL().path())) {
          AlignTo.go(context);
      }
  }
}