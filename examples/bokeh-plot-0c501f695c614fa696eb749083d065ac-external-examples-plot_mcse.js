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
    
      
      
    
      var element = document.getElementById("4023450f-1bdb-4c5a-9537-9d72e031d638");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4023450f-1bdb-4c5a-9537-9d72e031d638' but no matching script tag was found.")
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
                    
                  var docs_json = '{"068151de-44ed-4114-b81d-b6a2d9d77fb3":{"defs":[],"roots":{"references":[{"attributes":{},"id":"37210","type":"Selection"},{"attributes":{"callback":null},"id":"37148","type":"HoverTool"},{"attributes":{"overlay":{"id":"37149"}},"id":"37143","type":"BoxZoomTool"},{"attributes":{},"id":"37147","type":"SaveTool"},{"attributes":{"overlay":{"id":"37113"}},"id":"37107","type":"BoxZoomTool"},{"attributes":{},"id":"37144","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"37150"}},"id":"37145","type":"LassoSelectTool"},{"attributes":{},"id":"37146","type":"UndoTool"},{"attributes":{},"id":"37111","type":"SaveTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37181","type":"Span"},{"attributes":{"callback":null},"id":"37112","type":"HoverTool"},{"attributes":{"text":"mu"},"id":"37186","type":"Title"},{"attributes":{},"id":"37211","type":"UnionRenderers"},{"attributes":{},"id":"37108","type":"WheelZoomTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37182","type":"Scatter"},{"attributes":{"data_source":{"id":"37183"},"glyph":{"id":"37182"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37185"}},"id":"37184","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"37115"},{"id":"37151"}],"tools":[{"id":"37105"},{"id":"37106"},{"id":"37107"},{"id":"37108"},{"id":"37109"},{"id":"37110"},{"id":"37111"},{"id":"37112"},{"id":"37141"},{"id":"37142"},{"id":"37143"},{"id":"37144"},{"id":"37145"},{"id":"37146"},{"id":"37147"},{"id":"37148"}]},"id":"37217","type":"ProxyToolbar"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37189"},"major_label_policy":{"id":"37190"},"ticker":{"id":"37102"}},"id":"37101","type":"LinearAxis"},{"attributes":{},"id":"37212","type":"Selection"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37212"},"selection_policy":{"id":"37211"}},"id":"37183","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"37114"}},"id":"37109","type":"LassoSelectTool"},{"attributes":{},"id":"37102","type":"BasicTicker"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37167","type":"Span"},{"attributes":{"source":{"id":"37183"}},"id":"37185","type":"CDSView"},{"attributes":{"source":{"id":"37174"}},"id":"37178","type":"CDSView"},{"attributes":{"text":"tau"},"id":"37172","type":"Title"},{"attributes":{},"id":"37189","type":"BasicTickFormatter"},{"attributes":{},"id":"37190","type":"AllLabels"},{"attributes":{},"id":"37110","type":"UndoTool"},{"attributes":{},"id":"37105","type":"ResetTool"},{"attributes":{"data_source":{"id":"37174"},"glyph":{"id":"37175"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37176"},"view":{"id":"37178"}},"id":"37177","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"37180","type":"Span"},{"attributes":{},"id":"37106","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37175","type":"Circle"},{"attributes":{"axis":{"id":"37101"},"dimension":1,"ticker":null},"id":"37104","type":"Grid"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37198"},"selection_policy":{"id":"37197"}},"id":"37169","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"37166","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37149","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37210"},"selection_policy":{"id":"37209"}},"id":"37174","type":"ColumnDataSource"},{"attributes":{"source":{"id":"37169"}},"id":"37171","type":"CDSView"},{"attributes":{"data_source":{"id":"37169"},"glyph":{"id":"37168"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37171"}},"id":"37170","type":"GlyphRenderer"},{"attributes":{},"id":"37125","type":"DataRange1d"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37168","type":"Scatter"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"37165","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37192"},"major_label_policy":{"id":"37193"},"ticker":{"id":"37098"}},"id":"37097","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37113","type":"BoxAnnotation"},{"attributes":{},"id":"37192","type":"BasicTickFormatter"},{"attributes":{},"id":"37093","type":"LinearScale"},{"attributes":{},"id":"37193","type":"AllLabels"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37150","type":"PolyAnnotation"},{"attributes":{},"id":"37195","type":"UnionRenderers"},{"attributes":{},"id":"37196","type":"Selection"},{"attributes":{},"id":"37089","type":"DataRange1d"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37114","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"37088"},0,0],[{"id":"37124"},0,1]]},"id":"37216","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37196"},"selection_policy":{"id":"37195"}},"id":"37160","type":"ColumnDataSource"},{"attributes":{"end":1,"start":-0.05},"id":"37091","type":"DataRange1d"},{"attributes":{},"id":"37197","type":"UnionRenderers"},{"attributes":{"below":[{"id":"37097"}],"center":[{"id":"37100"},{"id":"37104"}],"height":500,"left":[{"id":"37101"}],"output_backend":"webgl","renderers":[{"id":"37163"},{"id":"37165"},{"id":"37166"},{"id":"37167"},{"id":"37170"}],"title":{"id":"37172"},"toolbar":{"id":"37115"},"toolbar_location":null,"width":500,"x_range":{"id":"37089"},"x_scale":{"id":"37093"},"y_range":{"id":"37091"},"y_scale":{"id":"37095"}},"id":"37088","subtype":"Figure","type":"Plot"},{"attributes":{"active_multi":null,"tools":[{"id":"37141"},{"id":"37142"},{"id":"37143"},{"id":"37144"},{"id":"37145"},{"id":"37146"},{"id":"37147"},{"id":"37148"}]},"id":"37151","type":"Toolbar"},{"attributes":{},"id":"37198","type":"Selection"},{"attributes":{},"id":"37203","type":"BasicTickFormatter"},{"attributes":{},"id":"37204","type":"AllLabels"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"37179","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37176","type":"Circle"},{"attributes":{"toolbar":{"id":"37217"},"toolbar_location":"above"},"id":"37218","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37161","type":"Circle"},{"attributes":{"source":{"id":"37160"}},"id":"37164","type":"CDSView"},{"attributes":{"children":[{"id":"37218"},{"id":"37216"}]},"id":"37219","type":"Column"},{"attributes":{"active_multi":null,"tools":[{"id":"37105"},{"id":"37106"},{"id":"37107"},{"id":"37108"},{"id":"37109"},{"id":"37110"},{"id":"37111"},{"id":"37112"}]},"id":"37115","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37162","type":"Circle"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37206"},"major_label_policy":{"id":"37207"},"ticker":{"id":"37134"}},"id":"37133","type":"LinearAxis"},{"attributes":{"below":[{"id":"37133"}],"center":[{"id":"37136"},{"id":"37140"}],"height":500,"left":[{"id":"37137"}],"output_backend":"webgl","renderers":[{"id":"37177"},{"id":"37179"},{"id":"37180"},{"id":"37181"},{"id":"37184"}],"title":{"id":"37186"},"toolbar":{"id":"37151"},"toolbar_location":null,"width":500,"x_range":{"id":"37125"},"x_scale":{"id":"37129"},"y_range":{"id":"37127"},"y_scale":{"id":"37131"}},"id":"37124","subtype":"Figure","type":"Plot"},{"attributes":{"end":1,"start":-0.05},"id":"37127","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37203"},"major_label_policy":{"id":"37204"},"ticker":{"id":"37138"}},"id":"37137","type":"LinearAxis"},{"attributes":{},"id":"37129","type":"LinearScale"},{"attributes":{},"id":"37131","type":"LinearScale"},{"attributes":{},"id":"37206","type":"BasicTickFormatter"},{"attributes":{},"id":"37141","type":"ResetTool"},{"attributes":{},"id":"37098","type":"BasicTicker"},{"attributes":{},"id":"37207","type":"AllLabels"},{"attributes":{},"id":"37134","type":"BasicTicker"},{"attributes":{},"id":"37142","type":"PanTool"},{"attributes":{"axis":{"id":"37133"},"ticker":null},"id":"37136","type":"Grid"},{"attributes":{"data_source":{"id":"37160"},"glyph":{"id":"37161"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37162"},"view":{"id":"37164"}},"id":"37163","type":"GlyphRenderer"},{"attributes":{},"id":"37095","type":"LinearScale"},{"attributes":{},"id":"37209","type":"UnionRenderers"},{"attributes":{"axis":{"id":"37137"},"dimension":1,"ticker":null},"id":"37140","type":"Grid"},{"attributes":{},"id":"37138","type":"BasicTicker"},{"attributes":{"axis":{"id":"37097"},"ticker":null},"id":"37100","type":"Grid"}],"root_ids":["37219"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"068151de-44ed-4114-b81d-b6a2d9d77fb3","root_ids":["37219"],"roots":{"37219":"4023450f-1bdb-4c5a-9537-9d72e031d638"}}];
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