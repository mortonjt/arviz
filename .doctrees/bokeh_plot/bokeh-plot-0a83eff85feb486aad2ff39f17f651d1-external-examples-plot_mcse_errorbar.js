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
    
      
      
    
      var element = document.getElementById("2c980c8d-09bb-4c71-99e1-a7331f132b57");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '2c980c8d-09bb-4c71-99e1-a7331f132b57' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ab3ebfa0-a71a-4303-a763-8217a0035f15":{"defs":[],"roots":{"references":[{"attributes":{},"id":"37342","type":"PanTool"},{"attributes":{},"id":"37329","type":"LinearScale"},{"attributes":{},"id":"37381","type":"UnionRenderers"},{"attributes":{},"id":"37382","type":"Selection"},{"attributes":{"axis":{"id":"37333"},"ticker":null},"id":"37336","type":"Grid"},{"attributes":{"children":[[{"id":"37324"},0,0]]},"id":"37386","type":"GridBox"},{"attributes":{},"id":"37341","type":"ResetTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37376"},"major_label_policy":{"id":"37377"},"ticker":{"id":"37334"}},"id":"37333","type":"LinearAxis"},{"attributes":{},"id":"37347","type":"SaveTool"},{"attributes":{"overlay":{"id":"37350"}},"id":"37345","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"37348","type":"HoverTool"},{"attributes":{},"id":"37346","type":"UndoTool"},{"attributes":{},"id":"37334","type":"BasicTicker"},{"attributes":{},"id":"37344","type":"WheelZoomTool"},{"attributes":{"active_multi":null,"tools":[{"id":"37341"},{"id":"37342"},{"id":"37343"},{"id":"37344"},{"id":"37345"},{"id":"37346"},{"id":"37347"},{"id":"37348"}]},"id":"37351","type":"Toolbar"},{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","formatter":{"id":"37373"},"major_label_policy":{"id":"37374"},"ticker":{"id":"37338"}},"id":"37337","type":"LinearAxis"},{"attributes":{"children":[{"id":"37388"},{"id":"37386"}]},"id":"37389","type":"Column"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37361","type":"Scatter"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37380"},"selection_policy":{"id":"37379"}},"id":"37360","type":"ColumnDataSource"},{"attributes":{},"id":"37373","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"37360"}},"id":"37364","type":"CDSView"},{"attributes":{},"id":"37374","type":"AllLabels"},{"attributes":{},"id":"37376","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"37360"},"glyph":{"id":"37361"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37362"},"view":{"id":"37364"}},"id":"37363","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37366","type":"MultiLine"},{"attributes":{},"id":"37331","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37362","type":"Scatter"},{"attributes":{},"id":"37377","type":"AllLabels"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06542507260989384,0.07779740932825195],[0.08783828101486021,0.09606135597316004],[0.09938050528645676,0.10552315572600299],[0.10794861576931342,0.11348270780810846],[0.11602734321885094,0.12203033330056018],[0.12350211909750375,0.12787167939093885],[0.12891616867169003,0.13323376159544686],[0.13473004088066556,0.13958486303584752],[0.14096481555257187,0.1460531576744907],[0.14714684275886325,0.15141900007039433],[0.15249024001585332,0.15717175454660753],[0.15761692093229293,0.16322637365277673],[0.16410729163047846,0.16867037944462424],[0.17025660267247006,0.17489182297617661],[0.17657098829958856,0.18216819265595885],[0.185369502560243,0.18948857007780892],[0.19264880841245133,0.19711830100588604],[0.20027922695307082,0.2044362824100993],[0.2124901683329975,0.2184324622519046],[0.23108929611368745,0.2369230522137875]]},"selected":{"id":"37382"},"selection_policy":{"id":"37381"}},"id":"37365","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37349","type":"BoxAnnotation"},{"attributes":{"source":{"id":"37365"}},"id":"37369","type":"CDSView"},{"attributes":{},"id":"37379","type":"UnionRenderers"},{"attributes":{},"id":"37325","type":"DataRange1d"},{"attributes":{},"id":"37380","type":"Selection"},{"attributes":{"axis":{"id":"37337"},"dimension":1,"ticker":null},"id":"37340","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"37367","type":"MultiLine"},{"attributes":{"below":[{"id":"37333"}],"center":[{"id":"37336"},{"id":"37340"}],"height":500,"left":[{"id":"37337"}],"output_backend":"webgl","renderers":[{"id":"37363"},{"id":"37368"}],"title":{"id":"37370"},"toolbar":{"id":"37351"},"toolbar_location":null,"width":500,"x_range":{"id":"37325"},"x_scale":{"id":"37329"},"y_range":{"id":"37327"},"y_scale":{"id":"37331"}},"id":"37324","subtype":"Figure","type":"Plot"},{"attributes":{"text":"sigma_a"},"id":"37370","type":"Title"},{"attributes":{},"id":"37338","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"37351"}],"tools":[{"id":"37341"},{"id":"37342"},{"id":"37343"},{"id":"37344"},{"id":"37345"},{"id":"37346"},{"id":"37347"},{"id":"37348"}]},"id":"37387","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"37387"},"toolbar_location":"above"},"id":"37388","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"37365"},"glyph":{"id":"37366"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37367"},"view":{"id":"37369"}},"id":"37368","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37350","type":"PolyAnnotation"},{"attributes":{},"id":"37327","type":"DataRange1d"},{"attributes":{"overlay":{"id":"37349"}},"id":"37343","type":"BoxZoomTool"}],"root_ids":["37389"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"ab3ebfa0-a71a-4303-a763-8217a0035f15","root_ids":["37389"],"roots":{"37389":"2c980c8d-09bb-4c71-99e1-a7331f132b57"}}];
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