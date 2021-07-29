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
    
      
      
    
      var element = document.getElementById("b75ab722-fb21-4764-982d-6a5352353747");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b75ab722-fb21-4764-982d-6a5352353747' but no matching script tag was found.")
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
                    
                  var docs_json = '{"14905e52-c4a2-4d03-9732-c5220ef26882":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"21134"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"21137","type":"Grid"},{"attributes":{"children":[{"id":"21193"},{"id":"21191"}]},"id":"21194","type":"Column"},{"attributes":{},"id":"21144","type":"SaveTool"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21168","type":"Patch"},{"attributes":{},"id":"21187","type":"Selection"},{"attributes":{"toolbar":{"id":"21192"},"toolbar_location":"above"},"id":"21193","type":"ToolbarBox"},{"attributes":{},"id":"21179","type":"BasicTickFormatter"},{"attributes":{},"id":"21186","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"21146"}},"id":"21140","type":"BoxZoomTool"},{"attributes":{"toolbars":[{"id":"21148"}],"tools":[{"id":"21138"},{"id":"21139"},{"id":"21140"},{"id":"21141"},{"id":"21142"},{"id":"21143"},{"id":"21144"},{"id":"21145"}]},"id":"21192","type":"ProxyToolbar"},{"attributes":{"below":[{"id":"21130"}],"center":[{"id":"21133"},{"id":"21137"}],"height":500,"left":[{"id":"21134"}],"output_backend":"webgl","renderers":[{"id":"21160"},{"id":"21165"},{"id":"21170"}],"title":{"id":"21175"},"toolbar":{"id":"21148"},"toolbar_location":null,"width":500,"x_range":{"id":"21172"},"x_scale":{"id":"21126"},"y_range":{"id":"21173"},"y_scale":{"id":"21128"}},"id":"21121","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"21131","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21147","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21146","type":"BoxAnnotation"},{"attributes":{},"id":"21135","type":"BasicTicker"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21163","type":"Patch"},{"attributes":{},"id":"21185","type":"Selection"},{"attributes":{},"id":"21176","type":"BasicTickFormatter"},{"attributes":{},"id":"21141","type":"WheelZoomTool"},{"attributes":{"end":6.1403658227239815,"start":-2.479927134291711},"id":"21173","type":"Range1d"},{"attributes":{"data_source":{"id":"21162"},"glyph":{"id":"21163"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21164"},"view":{"id":"21166"}},"id":"21165","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"21145","type":"HoverTool"},{"attributes":{"children":[[{"id":"21121"},0,0]]},"id":"21191","type":"GridBox"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"21169","type":"Patch"},{"attributes":{},"id":"21138","type":"ResetTool"},{"attributes":{},"id":"21175","type":"Title"},{"attributes":{"active_multi":null,"tools":[{"id":"21138"},{"id":"21139"},{"id":"21140"},{"id":"21141"},{"id":"21142"},{"id":"21143"},{"id":"21144"},{"id":"21145"}]},"id":"21148","type":"Toolbar"},{"attributes":{},"id":"21143","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[537]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[537]}},"selected":{"id":"21183"},"selection_policy":{"id":"21182"}},"id":"21157","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"21164","type":"Patch"},{"attributes":{},"id":"21126","type":"LinearScale"},{"attributes":{"data_source":{"id":"21157"},"glyph":{"id":"21158"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21159"},"view":{"id":"21161"}},"id":"21160","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21162"}},"id":"21166","type":"CDSView"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21158","type":"Patch"},{"attributes":{},"id":"21184","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"21167"},"glyph":{"id":"21168"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"21169"},"view":{"id":"21171"}},"id":"21170","type":"GlyphRenderer"},{"attributes":{"source":{"id":"21167"}},"id":"21171","type":"CDSView"},{"attributes":{},"id":"21177","type":"AllLabels"},{"attributes":{"formatter":{"id":"21179"},"major_label_policy":{"id":"21180"},"ticker":{"id":"21131"}},"id":"21130","type":"LinearAxis"},{"attributes":{"formatter":{"id":"21176"},"major_label_policy":{"id":"21177"},"ticker":{"id":"21135"}},"id":"21134","type":"LinearAxis"},{"attributes":{},"id":"21128","type":"LinearScale"},{"attributes":{"source":{"id":"21157"}},"id":"21161","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[319]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[319]}},"selected":{"id":"21185"},"selection_policy":{"id":"21184"}},"id":"21162","type":"ColumnDataSource"},{"attributes":{},"id":"21182","type":"UnionRenderers"},{"attributes":{},"id":"21183","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"7hzqY3Rl8T9WAgLCswbxPy40TMqzyvA/c1g6nwC98D+ET23hltrwP9DkIjwe/vA/o9fbuREU8T/J5S/gYTbxP2bLKC0Id/E/oG5qi7iD8T/U8loVvfTxP/yb+ApOcfI/GDBZr/Kl8j8gEWGDQADzP0R1jJfPqPM/zJSJMd3U8z9riVQaxnT0P3z5ubPHA/U/GeqhWf5n9T8wXuo1sjL2P9C9gSVHivY/4MIauJxh9z/i2cO4jL/3P5QnSzqHkPg/QjKYE//h+D9IjHu8cb/5P1yAiggPBPo/+PCrPlzu+j8ODuir11T7P6xV3MBGHfw/XNP7iwsG/T9cugxDMUz9PxAfPcUbe/4/KX/l/Ypp/z/Eg21HBqr/Pzr0zmR4bABAlCbnpe0DAUDsWP/mYpsBQFuLTH9T7wFAR4sXKNgyAkCgvS9pTcoCQPjvR6rCYQNAUiJg6zf5A0CqVHgsrZAEQASHkG0iKAVAXrmorpe/BUByK7d9YQYGQLbrwO8MVwZAaPPe5KLSBkAQHtkwgu4GQJbn00WTdQdAaFDxcfeFB0AujMdg6+UHQMKCCbNsHQhANZwcOVYkCEAAv0RT/EMIQFtEMEAyTwhA6qU2BbxOCEDjADI7m0QIQA9hEiWLLQhAwoIJs2wdCEC0Aj+NzwUIQGgiFjxm1AdAlvWcAs2YB0BoUPFx94UHQKZLrXOFTgdAYgQHS4j6BkAQHtkwgu4GQGbIxT6KpAZAtuvA7wxXBkCqHnotMEkGQJi1KJzg3QVAXrmorpe/BUD7bGFV6VQFQASHkG0iKAVAc/zrnJyvBECpVHgsrZAEQL87a9rtBwRAUyJg6zf5A0D470eqwmEDQGPuPu7LXQNAoL0vaU3KAkBROMKEwpsCQEaLFyjYMgJASyBmXAPMAUDsWP/mYpsBQJQm56XtAwFAmDMphonhAEA69M5keGwAQMSDbUcGqv8/SI6sceDV/j8RHz3FG3v+P1y6DEMxTP0/rFXcwEYd/D/48Ks+XO76P0iMe7xxv/k/lCdLOoeQ+D/gwhq4nGH3PzBe6jWyMvY/fPm5s8cD9T/MlIkx3dTzPzy8PfHPwvI/GDBZr/Kl8j8+vYCt/OzxP2bLKC0Id/E/7hzqY3Rl8T8=","dtype":"float64","order":"little","shape":[106]},"y":{"__ndarray__":"ShP4cHA59j/8xozsdU/3P6x6IWh7Zfg/YC6244B7+T8Q4kpfhpH6P8CV39qLp/s/dEl0VpG9/D8l/QjSltP9P3bAouKEvf4/1LCdTZzp/j+IZDLJof//PxyMY6LTigBAwovc+B2+AED05S1g1hUBQM4/+B3ZoAFAMJ0ecum/AUCmmcLb2ysCQJTOUfk8gAJAfvOMmd62AkBeLsn5bBkDQFhNV1fhQQNAdDis9nahA0AwpyEV5MwDQJXxVlJILwRACAHs0uZXBEAGuN1BA8MEQOJatpDp4gRAQzwxzJBHBUC6tIBO7G0FQOzNwWDptAVAkg5LDO/4BUBHmwTvZA0GQPZOlQd2UwZAbGgVyvGDBkAjocxx6pAGQHIclgHVxAZAJ3+7bVzqBkBc8Bl03AAHQETC34f0DgdAvZNr42saB0BEN/L+Lz4HQDXOlkBWXwdA7tXL3uhzB0By6GbhPXEHQFGspLLBWQdAiMZet/gvB0BEwt+H9A4HQMOqntoT4AZAbGgVyvGDBkBrToSF2GsGQJIOSwzv+AVAQ9fJDx/pBUC6tIBO7G0FQMe7QEqU9QRA4lq2kOniBEAIAezS5lcEQDCnIRXkzANAWE1XV+FBA0B+84yZ3rYCQKWZwtvbKwJArAqLmRH1AUDOP/gd2aABQPTlLWDWFQFAHIxjotOKAEDdg64zamcAQIhkMsmh//8/1bCdTZzp/j/HPaTE0cL+PyT9CNKW0/0/ehsQG7jl/D90SXRWkb38P7+V39qLp/s/d1Z0jG9k+z8R4kpfhpH6PwyXf+QXRPo/YC6244B7+T+VIMk4KUv5P6x6IWh7Zfg/InizPb5N+D9c2vtrklX3P/zGjOx1T/c/F0qr2k959j9KE/hwcDn2P+hOe+Uxq/U/mF9j9Woj9T/Rn15jHuT0P0QaPF2jLvQ/6KvOeWUN9D+lefwSj5/zPwp0r3AXNvM/Nvg5/l/38j8eYFdSod3yP/L7owv9jfI/KFdN2PxG8j8CSHdeBRXyP2tAfugo/PE/fI1Lh6v98T83nrDk5yPyP4OPgS0OevI/Nvg5/l/38j/68Eip03HzP+irznllDfQ/WMIP8MUn9D+YX2P1aiP1P/AztORtFPY/ShP4cHA59j8=","dtype":"float64","order":"little","shape":[106]}},"selected":{"id":"21187"},"selection_policy":{"id":"21186"}},"id":"21167","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"21147"}},"id":"21142","type":"LassoSelectTool"},{"attributes":{},"id":"21180","type":"AllLabels"},{"attributes":{},"id":"21139","type":"PanTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"21159","type":"Patch"},{"attributes":{"end":6.5641649333687715,"start":-2.8280074851944352},"id":"21172","type":"Range1d"},{"attributes":{"axis":{"id":"21130"},"grid_line_color":null,"ticker":null},"id":"21133","type":"Grid"}],"root_ids":["21194"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"14905e52-c4a2-4d03-9732-c5220ef26882","root_ids":["21194"],"roots":{"21194":"b75ab722-fb21-4764-982d-6a5352353747"}}];
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