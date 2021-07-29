(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("1f51145e-36c6-40e9-97ae-94a97525b45d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1f51145e-36c6-40e9-97ae-94a97525b45d' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"fcaa6254-b0ed-4bf4-9080-5e1fa7b58072":{"defs":[],"roots":{"references":[{"attributes":{"children":[[{"id":"14869"},0,0]]},"id":"14923","type":"GridBox"},{"attributes":{"text":"centered model - non centered model"},"id":"14909","type":"Title"},{"attributes":{},"id":"14889","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"14893","type":"HoverTool"},{"attributes":{},"id":"14916","type":"AllLabels"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14894","type":"BoxAnnotation"},{"attributes":{},"id":"14876","type":"LinearScale"},{"attributes":{},"id":"14913","type":"AllLabels"},{"attributes":{"children":[{"id":"14925"},{"id":"14923"}]},"id":"14926","type":"Column"},{"attributes":{},"id":"14918","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14905","type":"Scatter"},{"attributes":{},"id":"14919","type":"Selection"},{"attributes":{},"id":"14872","type":"DataRange1d"},{"attributes":{},"id":"14892","type":"SaveTool"},{"attributes":{},"id":"14883","type":"BasicTicker"},{"attributes":{},"id":"14874","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14895","type":"PolyAnnotation"},{"attributes":{},"id":"14891","type":"UndoTool"},{"attributes":{"data_source":{"id":"14906"},"glyph":{"id":"14905"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14908"}},"id":"14907","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"14886"},{"id":"14887"},{"id":"14888"},{"id":"14889"},{"id":"14890"},{"id":"14891"},{"id":"14892"},{"id":"14893"}]},"id":"14896","type":"Toolbar"},{"attributes":{"overlay":{"id":"14895"}},"id":"14890","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"14878"}],"center":[{"id":"14881"},{"id":"14885"}],"height":288,"left":[{"id":"14882"}],"output_backend":"webgl","renderers":[{"id":"14907"}],"title":{"id":"14909"},"toolbar":{"id":"14896"},"toolbar_location":null,"width":432,"x_range":{"id":"14870"},"x_scale":{"id":"14874"},"y_range":{"id":"14872"},"y_scale":{"id":"14876"}},"id":"14869","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14912"},"major_label_policy":{"id":"14913"},"ticker":{"id":"14883"}},"id":"14882","type":"LinearAxis"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14919"},"selection_policy":{"id":"14918"}},"id":"14906","type":"ColumnDataSource"},{"attributes":{},"id":"14915","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"14894"}},"id":"14888","type":"BoxZoomTool"},{"attributes":{"source":{"id":"14906"}},"id":"14908","type":"CDSView"},{"attributes":{},"id":"14886","type":"ResetTool"},{"attributes":{"toolbars":[{"id":"14896"}],"tools":[{"id":"14886"},{"id":"14887"},{"id":"14888"},{"id":"14889"},{"id":"14890"},{"id":"14891"},{"id":"14892"},{"id":"14893"}]},"id":"14924","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"14924"},"toolbar_location":"above"},"id":"14925","type":"ToolbarBox"},{"attributes":{"formatter":{"id":"14915"},"major_label_policy":{"id":"14916"},"ticker":{"id":"14879"}},"id":"14878","type":"LinearAxis"},{"attributes":{},"id":"14879","type":"BasicTicker"},{"attributes":{},"id":"14887","type":"PanTool"},{"attributes":{},"id":"14912","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"14882"},"dimension":1,"ticker":null},"id":"14885","type":"Grid"},{"attributes":{},"id":"14870","type":"DataRange1d"},{"attributes":{"axis":{"id":"14878"},"ticker":null},"id":"14881","type":"Grid"}],"root_ids":["14926"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"fcaa6254-b0ed-4bf4-9080-5e1fa7b58072","root_ids":["14926"],"roots":{"14926":"1f51145e-36c6-40e9-97ae-94a97525b45d"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();