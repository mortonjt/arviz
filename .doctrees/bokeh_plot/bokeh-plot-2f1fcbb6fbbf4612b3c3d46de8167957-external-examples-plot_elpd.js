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
    
      
      
    
      var element = document.getElementById("c5083fc3-91a6-4d34-a617-07c209459bc1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c5083fc3-91a6-4d34-a617-07c209459bc1' but no matching script tag was found.")
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
                    
                  var docs_json = '{"87af20f4-725c-40ca-bd75-eb3937bbad6d":{"defs":[],"roots":{"references":[{"attributes":{"toolbars":[{"id":"17988"}],"tools":[{"id":"17978"},{"id":"17979"},{"id":"17980"},{"id":"17981"},{"id":"17982"},{"id":"17983"},{"id":"17984"},{"id":"17985"}]},"id":"18016","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"17986"}},"id":"17980","type":"BoxZoomTool"},{"attributes":{},"id":"17964","type":"DataRange1d"},{"attributes":{"active_multi":null,"tools":[{"id":"17978"},{"id":"17979"},{"id":"17980"},{"id":"17981"},{"id":"17982"},{"id":"17983"},{"id":"17984"},{"id":"17985"}]},"id":"17988","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17986","type":"BoxAnnotation"},{"attributes":{},"id":"17978","type":"ResetTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"18011"},"selection_policy":{"id":"18010"}},"id":"17998","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"17970"}],"center":[{"id":"17973"},{"id":"17977"}],"height":288,"left":[{"id":"17974"}],"output_backend":"webgl","renderers":[{"id":"17999"}],"title":{"id":"18001"},"toolbar":{"id":"17988"},"toolbar_location":null,"width":432,"x_range":{"id":"17962"},"x_scale":{"id":"17966"},"y_range":{"id":"17964"},"y_scale":{"id":"17968"}},"id":"17961","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18008","type":"AllLabels"},{"attributes":{},"id":"18004","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"18016"},"toolbar_location":"above"},"id":"18017","type":"ToolbarBox"},{"attributes":{},"id":"18007","type":"BasicTickFormatter"},{"attributes":{},"id":"18011","type":"Selection"},{"attributes":{},"id":"17962","type":"DataRange1d"},{"attributes":{},"id":"17968","type":"LinearScale"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"18004"},"major_label_policy":{"id":"18005"},"ticker":{"id":"17975"}},"id":"17974","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17985","type":"HoverTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17997","type":"Scatter"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"18001","type":"Title"},{"attributes":{},"id":"17983","type":"UndoTool"},{"attributes":{},"id":"17981","type":"WheelZoomTool"},{"attributes":{"children":[[{"id":"17961"},0,0]]},"id":"18015","type":"GridBox"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17987","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"17970"},"ticker":null},"id":"17973","type":"Grid"},{"attributes":{},"id":"18005","type":"AllLabels"},{"attributes":{},"id":"17984","type":"SaveTool"},{"attributes":{},"id":"17971","type":"BasicTicker"},{"attributes":{"source":{"id":"17998"}},"id":"18000","type":"CDSView"},{"attributes":{},"id":"17979","type":"PanTool"},{"attributes":{"overlay":{"id":"17987"}},"id":"17982","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"17974"},"dimension":1,"ticker":null},"id":"17977","type":"Grid"},{"attributes":{},"id":"17975","type":"BasicTicker"},{"attributes":{"children":[{"id":"18017"},{"id":"18015"}]},"id":"18018","type":"Column"},{"attributes":{},"id":"18010","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17998"},"glyph":{"id":"17997"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18000"}},"id":"17999","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"18007"},"major_label_policy":{"id":"18008"},"ticker":{"id":"17971"}},"id":"17970","type":"LinearAxis"},{"attributes":{},"id":"17966","type":"LinearScale"}],"root_ids":["18018"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"87af20f4-725c-40ca-bd75-eb3937bbad6d","root_ids":["18018"],"roots":{"18018":"c5083fc3-91a6-4d34-a617-07c209459bc1"}}];
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