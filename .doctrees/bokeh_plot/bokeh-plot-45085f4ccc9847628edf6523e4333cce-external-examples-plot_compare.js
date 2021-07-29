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
    
      
      
    
      var element = document.getElementById("6e4481da-1974-4aa6-923c-d40b09e1449b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6e4481da-1974-4aa6-923c-d40b09e1449b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"367e5477-5368-4bcc-9ca3-97009d474b0c":{"defs":[],"roots":{"references":[{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15680","type":"PolyAnnotation"},{"attributes":{"end":0.5,"start":-1.5},"id":"15657","type":"DataRange1d"},{"attributes":{},"id":"15731","type":"UnionRenderers"},{"attributes":{"source":{"id":"15707"}},"id":"15711","type":"CDSView"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15693","type":"Scatter"},{"attributes":{},"id":"15677","type":"SaveTool"},{"attributes":{"data_source":{"id":"15707"},"glyph":{"id":"15708"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15709"},"view":{"id":"15711"}},"id":"15710","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"15692"},"glyph":{"id":"15693"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15694"},"view":{"id":"15696"}},"id":"15695","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"15679"}},"id":"15673","type":"BoxZoomTool"},{"attributes":{"source":{"id":"15702"}},"id":"15706","type":"CDSView"},{"attributes":{"source":{"id":"15697"}},"id":"15701","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15730"},"selection_policy":{"id":"15729"}},"id":"15702","type":"ColumnDataSource"},{"attributes":{},"id":"15720","type":"BasicTickFormatter"},{"attributes":{},"id":"15725","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"15678","type":"HoverTool"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15717","type":"Span"},{"attributes":{"overlay":{"id":"15680"}},"id":"15675","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15694","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15699","type":"MultiLine"},{"attributes":{},"id":"15655","type":"DataRange1d"},{"attributes":{},"id":"15729","type":"UnionRenderers"},{"attributes":{},"id":"15674","type":"WheelZoomTool"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15709","type":"MultiLine"},{"attributes":{},"id":"15664","type":"BasicTicker"},{"attributes":{},"id":"15671","type":"ResetTool"},{"attributes":{"formatter":{"id":"15720"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15721"},"ticker":{"id":"15690"}},"id":"15667","type":"LinearAxis"},{"attributes":{"data_source":{"id":"15702"},"glyph":{"id":"15703"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15704"},"view":{"id":"15706"}},"id":"15705","type":"GlyphRenderer"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15690","type":"FixedTicker"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15708","type":"MultiLine"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15698","type":"MultiLine"},{"attributes":{"toolbar":{"id":"15739"},"toolbar_location":"above"},"id":"15740","type":"ToolbarBox"},{"attributes":{},"id":"15728","type":"Selection"},{"attributes":{"children":[[{"id":"15654"},0,0]]},"id":"15738","type":"GridBox"},{"attributes":{},"id":"15672","type":"PanTool"},{"attributes":{},"id":"15730","type":"Selection"},{"attributes":{"children":[{"id":"15740"},{"id":"15738"}]},"id":"15741","type":"Column"},{"attributes":{},"id":"15676","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15679","type":"BoxAnnotation"},{"attributes":{},"id":"15733","type":"UnionRenderers"},{"attributes":{"below":[{"id":"15663"}],"center":[{"id":"15666"},{"id":"15670"}],"height":500,"left":[{"id":"15667"}],"output_backend":"webgl","renderers":[{"id":"15695"},{"id":"15700"},{"id":"15705"},{"id":"15710"},{"id":"15715"},{"id":"15717"}],"title":{"id":"15719"},"toolbar":{"id":"15681"},"toolbar_location":null,"width":500,"x_range":{"id":"15655"},"x_scale":{"id":"15659"},"y_range":{"id":"15657"},"y_scale":{"id":"15661"}},"id":"15654","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15704","type":"Circle"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15713","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15714","type":"Circle"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15728"},"selection_policy":{"id":"15727"}},"id":"15697","type":"ColumnDataSource"},{"attributes":{},"id":"15732","type":"Selection"},{"attributes":{"toolbars":[{"id":"15681"}],"tools":[{"id":"15671"},{"id":"15672"},{"id":"15673"},{"id":"15674"},{"id":"15675"},{"id":"15676"},{"id":"15677"},{"id":"15678"}]},"id":"15739","type":"ProxyToolbar"},{"attributes":{"active_multi":null,"tools":[{"id":"15671"},{"id":"15672"},{"id":"15673"},{"id":"15674"},{"id":"15675"},{"id":"15676"},{"id":"15677"},{"id":"15678"}]},"id":"15681","type":"Toolbar"},{"attributes":{},"id":"15723","type":"AllLabels"},{"attributes":{},"id":"15719","type":"Title"},{"attributes":{},"id":"15721","type":"AllLabels"},{"attributes":{},"id":"15722","type":"BasicTickFormatter"},{"attributes":{},"id":"15659","type":"LinearScale"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15703","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15734"},"selection_policy":{"id":"15733"}},"id":"15712","type":"ColumnDataSource"},{"attributes":{},"id":"15727","type":"UnionRenderers"},{"attributes":{},"id":"15661","type":"LinearScale"},{"attributes":{"axis_label":"Log","formatter":{"id":"15722"},"major_label_policy":{"id":"15723"},"ticker":{"id":"15664"}},"id":"15663","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15726"},"selection_policy":{"id":"15725"}},"id":"15692","type":"ColumnDataSource"},{"attributes":{"source":{"id":"15712"}},"id":"15716","type":"CDSView"},{"attributes":{"source":{"id":"15692"}},"id":"15696","type":"CDSView"},{"attributes":{},"id":"15726","type":"Selection"},{"attributes":{"axis":{"id":"15667"},"dimension":1,"ticker":null},"id":"15670","type":"Grid"},{"attributes":{"data_source":{"id":"15697"},"glyph":{"id":"15698"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15699"},"view":{"id":"15701"}},"id":"15700","type":"GlyphRenderer"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15732"},"selection_policy":{"id":"15731"}},"id":"15707","type":"ColumnDataSource"},{"attributes":{},"id":"15734","type":"Selection"},{"attributes":{"data_source":{"id":"15712"},"glyph":{"id":"15713"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15714"},"view":{"id":"15716"}},"id":"15715","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"15663"},"ticker":null},"id":"15666","type":"Grid"}],"root_ids":["15741"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"367e5477-5368-4bcc-9ca3-97009d474b0c","root_ids":["15741"],"roots":{"15741":"6e4481da-1974-4aa6-923c-d40b09e1449b"}}];
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