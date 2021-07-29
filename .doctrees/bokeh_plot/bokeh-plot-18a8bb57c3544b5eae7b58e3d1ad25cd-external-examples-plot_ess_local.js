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
    
      
      
    
      var element = document.getElementById("e3e45cc1-c81b-40ae-8a85-7d159344876b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e3e45cc1-c81b-40ae-8a85-7d159344876b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"4ed0525a-6d78-4387-baef-e627105ad7f7":{"defs":[],"roots":{"references":[{"attributes":{"toolbar":{"id":"18471"},"toolbar_location":"above"},"id":"18472","type":"ToolbarBox"},{"attributes":{},"id":"18466","type":"Selection"},{"attributes":{},"id":"18424","type":"ResetTool"},{"attributes":{"overlay":{"id":"18432"}},"id":"18426","type":"BoxZoomTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"18466"},"selection_policy":{"id":"18465"}},"id":"18449","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18449"}},"id":"18451","type":"CDSView"},{"attributes":{},"id":"18460","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"18443"},"glyph":{"id":"18444"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18445"},"view":{"id":"18447"}},"id":"18446","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18416"},"ticker":null},"id":"18419","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18444","type":"Circle"},{"attributes":{"active_multi":null,"tools":[{"id":"18424"},{"id":"18425"},{"id":"18426"},{"id":"18427"},{"id":"18428"},{"id":"18429"},{"id":"18430"},{"id":"18431"}]},"id":"18434","type":"Toolbar"},{"attributes":{},"id":"18408","type":"DataRange1d"},{"attributes":{"children":[[{"id":"18407"},0,0]]},"id":"18470","type":"GridBox"},{"attributes":{},"id":"18410","type":"DataRange1d"},{"attributes":{"callback":null},"id":"18431","type":"HoverTool"},{"attributes":{"source":{"id":"18443"}},"id":"18447","type":"CDSView"},{"attributes":{},"id":"18421","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18432","type":"BoxAnnotation"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"18448","type":"Scatter"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"18457"},"major_label_policy":{"id":"18458"},"ticker":{"id":"18421"}},"id":"18420","type":"LinearAxis"},{"attributes":{},"id":"18463","type":"UnionRenderers"},{"attributes":{"children":[{"id":"18472"},{"id":"18470"}]},"id":"18473","type":"Column"},{"attributes":{},"id":"18414","type":"LinearScale"},{"attributes":{},"id":"18425","type":"PanTool"},{"attributes":{},"id":"18465","type":"UnionRenderers"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18453","type":"Span"},{"attributes":{},"id":"18430","type":"SaveTool"},{"attributes":{},"id":"18457","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18433","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"18433"}},"id":"18428","type":"LassoSelectTool"},{"attributes":{"text":"mu"},"id":"18454","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18445","type":"Circle"},{"attributes":{},"id":"18458","type":"AllLabels"},{"attributes":{},"id":"18429","type":"UndoTool"},{"attributes":{},"id":"18464","type":"Selection"},{"attributes":{"axis":{"id":"18420"},"dimension":1,"ticker":null},"id":"18423","type":"Grid"},{"attributes":{},"id":"18417","type":"BasicTicker"},{"attributes":{},"id":"18461","type":"AllLabels"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18460"},"major_label_policy":{"id":"18461"},"ticker":{"id":"18417"}},"id":"18416","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18464"},"selection_policy":{"id":"18463"}},"id":"18443","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18449"},"glyph":{"id":"18448"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18451"}},"id":"18450","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"18452","type":"Span"},{"attributes":{},"id":"18412","type":"LinearScale"},{"attributes":{},"id":"18427","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"18416"}],"center":[{"id":"18419"},{"id":"18423"}],"height":500,"left":[{"id":"18420"}],"output_backend":"webgl","renderers":[{"id":"18446"},{"id":"18450"},{"id":"18452"},{"id":"18453"}],"title":{"id":"18454"},"toolbar":{"id":"18434"},"toolbar_location":null,"width":500,"x_range":{"id":"18408"},"x_scale":{"id":"18412"},"y_range":{"id":"18410"},"y_scale":{"id":"18414"}},"id":"18407","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"18434"}],"tools":[{"id":"18424"},{"id":"18425"},{"id":"18426"},{"id":"18427"},{"id":"18428"},{"id":"18429"},{"id":"18430"},{"id":"18431"}]},"id":"18471","type":"ProxyToolbar"}],"root_ids":["18473"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"4ed0525a-6d78-4387-baef-e627105ad7f7","root_ids":["18473"],"roots":{"18473":"e3e45cc1-c81b-40ae-8a85-7d159344876b"}}];
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