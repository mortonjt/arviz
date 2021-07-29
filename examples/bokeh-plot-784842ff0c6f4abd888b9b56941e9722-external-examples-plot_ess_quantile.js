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
    
      
      
    
      var element = document.getElementById("e722b71b-2f92-48e2-ab7d-567ea2e02e62");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e722b71b-2f92-48e2-ab7d-567ea2e02e62' but no matching script tag was found.")
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
                    
                  var docs_json = '{"65b250e4-f568-4c1f-9074-cb511d82d89c":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18578","type":"Selection"},{"attributes":{},"id":"18549","type":"SaveTool"},{"attributes":{"text":"sigma"},"id":"18568","type":"Title"},{"attributes":{"below":[{"id":"18535"}],"center":[{"id":"18538"},{"id":"18542"}],"height":500,"left":[{"id":"18539"}],"output_backend":"webgl","renderers":[{"id":"18565"},{"id":"18567"}],"title":{"id":"18568"},"toolbar":{"id":"18553"},"toolbar_location":null,"width":500,"x_range":{"id":"18527"},"x_scale":{"id":"18531"},"y_range":{"id":"18529"},"y_scale":{"id":"18533"}},"id":"18526","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18536","type":"BasicTicker"},{"attributes":{"children":[[{"id":"18526"},0,0]]},"id":"18582","type":"GridBox"},{"attributes":{},"id":"18575","type":"AllLabels"},{"attributes":{"children":[{"id":"18584"},{"id":"18582"}]},"id":"18585","type":"Column"},{"attributes":{},"id":"18531","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18578"},"selection_policy":{"id":"18577"}},"id":"18562","type":"ColumnDataSource"},{"attributes":{},"id":"18548","type":"UndoTool"},{"attributes":{},"id":"18544","type":"PanTool"},{"attributes":{},"id":"18577","type":"UnionRenderers"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"18571"},"major_label_policy":{"id":"18572"},"ticker":{"id":"18540"}},"id":"18539","type":"LinearAxis"},{"attributes":{},"id":"18546","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18552","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"18552"}},"id":"18547","type":"LassoSelectTool"},{"attributes":{},"id":"18529","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"18583"},"toolbar_location":"above"},"id":"18584","type":"ToolbarBox"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18574"},"major_label_policy":{"id":"18575"},"ticker":{"id":"18536"}},"id":"18535","type":"LinearAxis"},{"attributes":{},"id":"18571","type":"BasicTickFormatter"},{"attributes":{},"id":"18574","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"18539"},"dimension":1,"ticker":null},"id":"18542","type":"Grid"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18567","type":"Span"},{"attributes":{},"id":"18533","type":"LinearScale"},{"attributes":{"overlay":{"id":"18551"}},"id":"18545","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"18562"},"glyph":{"id":"18563"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18564"},"view":{"id":"18566"}},"id":"18565","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18564","type":"Circle"},{"attributes":{"toolbars":[{"id":"18553"}],"tools":[{"id":"18543"},{"id":"18544"},{"id":"18545"},{"id":"18546"},{"id":"18547"},{"id":"18548"},{"id":"18549"},{"id":"18550"}]},"id":"18583","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"18535"},"ticker":null},"id":"18538","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18551","type":"BoxAnnotation"},{"attributes":{"source":{"id":"18562"}},"id":"18566","type":"CDSView"},{"attributes":{"callback":null},"id":"18550","type":"HoverTool"},{"attributes":{},"id":"18572","type":"AllLabels"},{"attributes":{},"id":"18540","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"18543"},{"id":"18544"},{"id":"18545"},{"id":"18546"},{"id":"18547"},{"id":"18548"},{"id":"18549"},{"id":"18550"}]},"id":"18553","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18563","type":"Circle"},{"attributes":{},"id":"18527","type":"DataRange1d"},{"attributes":{},"id":"18543","type":"ResetTool"}],"root_ids":["18585"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"65b250e4-f568-4c1f-9074-cb511d82d89c","root_ids":["18585"],"roots":{"18585":"e722b71b-2f92-48e2-ab7d-567ea2e02e62"}}];
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