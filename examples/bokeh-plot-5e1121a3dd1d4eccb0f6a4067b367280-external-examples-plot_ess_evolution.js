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
    
      
      
    
      var element = document.getElementById("0799a77f-5f1e-4906-abe6-5ba4f80aa0f6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0799a77f-5f1e-4906-abe6-5ba4f80aa0f6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1159ef5c-0f3a-45b3-8e3a-56789b644fff":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18262","type":"LinearScale"},{"attributes":{},"id":"18326","type":"UnionRenderers"},{"attributes":{"axis_label":"ESS","formatter":{"id":"18318"},"major_label_policy":{"id":"18319"},"ticker":{"id":"18269"}},"id":"18268","type":"LinearAxis"},{"attributes":{"data_source":{"id":"18301"},"glyph":{"id":"18302"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18303"},"view":{"id":"18305"}},"id":"18304","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"18279","type":"HoverTool"},{"attributes":{"source":{"id":"18296"}},"id":"18300","type":"CDSView"},{"attributes":{"above":[{"id":"18312"}],"below":[{"id":"18264"}],"center":[{"id":"18267"},{"id":"18271"}],"height":500,"left":[{"id":"18268"}],"output_backend":"webgl","renderers":[{"id":"18294"},{"id":"18299"},{"id":"18304"},{"id":"18309"},{"id":"18311"}],"title":{"id":"18315"},"toolbar":{"id":"18282"},"toolbar_location":null,"width":500,"x_range":{"id":"18256"},"x_scale":{"id":"18260"},"y_range":{"id":"18258"},"y_scale":{"id":"18262"}},"id":"18255","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18328","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18325"},"selection_policy":{"id":"18324"}},"id":"18291","type":"ColumnDataSource"},{"attributes":{},"id":"18273","type":"PanTool"},{"attributes":{"source":{"id":"18291"}},"id":"18295","type":"CDSView"},{"attributes":{"click_policy":"hide","items":[{"id":"18313"},{"id":"18314"}],"location":"center_right","orientation":"horizontal"},"id":"18312","type":"Legend"},{"attributes":{"source":{"id":"18301"}},"id":"18305","type":"CDSView"},{"attributes":{},"id":"18327","type":"Selection"},{"attributes":{"toolbars":[{"id":"18282"}],"tools":[{"id":"18272"},{"id":"18273"},{"id":"18274"},{"id":"18275"},{"id":"18276"},{"id":"18277"},{"id":"18278"},{"id":"18279"}]},"id":"18336","type":"ProxyToolbar"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18297","type":"Line"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18307","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18292","type":"Circle"},{"attributes":{},"id":"18275","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18280","type":"BoxAnnotation"},{"attributes":{},"id":"18330","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18291"},"glyph":{"id":"18292"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18293"},"view":{"id":"18295"}},"id":"18294","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18264"},"ticker":null},"id":"18267","type":"Grid"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18302","type":"Line"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18311","type":"Span"},{"attributes":{"text":"b"},"id":"18315","type":"Title"},{"attributes":{},"id":"18324","type":"UnionRenderers"},{"attributes":{},"id":"18319","type":"AllLabels"},{"attributes":{},"id":"18258","type":"DataRange1d"},{"attributes":{"data_source":{"id":"18296"},"glyph":{"id":"18297"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18298"},"view":{"id":"18300"}},"id":"18299","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18268"},"dimension":1,"ticker":null},"id":"18271","type":"Grid"},{"attributes":{},"id":"18325","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"18272"},{"id":"18273"},{"id":"18274"},{"id":"18275"},{"id":"18276"},{"id":"18277"},{"id":"18278"},{"id":"18279"}]},"id":"18282","type":"Toolbar"},{"attributes":{},"id":"18331","type":"Selection"},{"attributes":{},"id":"18329","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18293","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18327"},"selection_policy":{"id":"18326"}},"id":"18296","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18306"},"glyph":{"id":"18307"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18308"},"view":{"id":"18310"}},"id":"18309","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18329"},"selection_policy":{"id":"18328"}},"id":"18301","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18331"},"selection_policy":{"id":"18330"}},"id":"18306","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18308","type":"Circle"},{"attributes":{},"id":"18269","type":"BasicTicker"},{"attributes":{"overlay":{"id":"18281"}},"id":"18276","type":"LassoSelectTool"},{"attributes":{"children":[[{"id":"18255"},0,0]]},"id":"18335","type":"GridBox"},{"attributes":{},"id":"18277","type":"UndoTool"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"18321"},"major_label_policy":{"id":"18322"},"ticker":{"id":"18265"}},"id":"18264","type":"LinearAxis"},{"attributes":{"source":{"id":"18306"}},"id":"18310","type":"CDSView"},{"attributes":{},"id":"18318","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18281","type":"PolyAnnotation"},{"attributes":{},"id":"18321","type":"BasicTickFormatter"},{"attributes":{},"id":"18322","type":"AllLabels"},{"attributes":{"toolbar":{"id":"18336"},"toolbar_location":"above"},"id":"18337","type":"ToolbarBox"},{"attributes":{},"id":"18265","type":"BasicTicker"},{"attributes":{},"id":"18256","type":"DataRange1d"},{"attributes":{"overlay":{"id":"18280"}},"id":"18274","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18303","type":"Line"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"18309"},{"id":"18304"}]},"id":"18314","type":"LegendItem"},{"attributes":{},"id":"18260","type":"LinearScale"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"18294"},{"id":"18299"}]},"id":"18313","type":"LegendItem"},{"attributes":{},"id":"18272","type":"ResetTool"},{"attributes":{"children":[{"id":"18337"},{"id":"18335"}]},"id":"18338","type":"Column"},{"attributes":{},"id":"18278","type":"SaveTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18298","type":"Line"}],"root_ids":["18338"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"1159ef5c-0f3a-45b3-8e3a-56789b644fff","root_ids":["18338"],"roots":{"18338":"0799a77f-5f1e-4906-abe6-5ba4f80aa0f6"}}];
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