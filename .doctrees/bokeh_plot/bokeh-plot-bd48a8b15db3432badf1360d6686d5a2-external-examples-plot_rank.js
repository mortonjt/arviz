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
    
      
      
    
      var element = document.getElementById("a013ba88-d20d-4fe8-a685-eea09ebc5863");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a013ba88-d20d-4fe8-a685-eea09ebc5863' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c94f3212-a27a-46a8-ab8d-a13fff42c73b":{"defs":[],"roots":{"references":[{"attributes":{},"id":"43324","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43291","type":"VBar"},{"attributes":{},"id":"43335","type":"UnionRenderers"},{"attributes":{},"id":"43325","type":"AllLabels"},{"attributes":{"data_source":{"id":"43284"},"glyph":{"id":"43285"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43286"},"view":{"id":"43288"}},"id":"43287","type":"GlyphRenderer"},{"attributes":{},"id":"43336","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43292","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43334"},"selection_policy":{"id":"43333"}},"id":"43290","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"43197"},{"id":"43198"},{"id":"43199"},{"id":"43200"},{"id":"43201"},{"id":"43202"},{"id":"43203"},{"id":"43204"}]},"id":"43207","type":"Toolbar"},{"attributes":{"data_source":{"id":"43290"},"glyph":{"id":"43291"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43292"},"view":{"id":"43294"}},"id":"43293","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"43189"},"ticker":null},"id":"43192","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43240","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43205","type":"BoxAnnotation"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"43289","type":"Span"},{"attributes":{"below":[{"id":"43189"}],"center":[{"id":"43192"},{"id":"43196"},{"id":"43255"},{"id":"43261"},{"id":"43267"},{"id":"43273"}],"height":331,"left":[{"id":"43193"}],"output_backend":"webgl","renderers":[{"id":"43253"},{"id":"43259"},{"id":"43265"},{"id":"43271"}],"title":{"id":"43276"},"toolbar":{"id":"43207"},"toolbar_location":null,"width":496,"x_range":{"id":"43181"},"x_scale":{"id":"43185"},"y_range":{"id":"43183"},"y_scale":{"id":"43187"}},"id":"43180","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43313"},"selection_policy":{"id":"43312"}},"id":"43250","type":"ColumnDataSource"},{"attributes":{"source":{"id":"43284"}},"id":"43288","type":"CDSView"},{"attributes":{},"id":"43309","type":"BasicTickFormatter"},{"attributes":{},"id":"43219","type":"LinearScale"},{"attributes":{},"id":"43310","type":"AllLabels"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43206","type":"PolyAnnotation"},{"attributes":{},"id":"43312","type":"UnionRenderers"},{"attributes":{},"id":"43313","type":"Selection"},{"attributes":{"data_source":{"id":"43296"},"glyph":{"id":"43297"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43298"},"view":{"id":"43300"}},"id":"43299","type":"GlyphRenderer"},{"attributes":{},"id":"43326","type":"BasicTickFormatter"},{"attributes":{},"id":"43327","type":"AllLabels"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43297","type":"VBar"},{"attributes":{"toolbars":[{"id":"43207"},{"id":"43241"}],"tools":[{"id":"43197"},{"id":"43198"},{"id":"43199"},{"id":"43200"},{"id":"43201"},{"id":"43202"},{"id":"43203"},{"id":"43204"},{"id":"43231"},{"id":"43232"},{"id":"43233"},{"id":"43234"},{"id":"43235"},{"id":"43236"},{"id":"43237"},{"id":"43238"}]},"id":"43341","type":"ProxyToolbar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43258","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43309"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43310"},"ticker":{"id":"43190"}},"id":"43189","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43298","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43252","type":"VBar"},{"attributes":{},"id":"43329","type":"UnionRenderers"},{"attributes":{"source":{"id":"43250"}},"id":"43254","type":"CDSView"},{"attributes":{"ticks":[0,1,2,3]},"id":"43302","type":"FixedTicker"},{"attributes":{},"id":"43198","type":"PanTool"},{"attributes":{},"id":"43330","type":"Selection"},{"attributes":{"axis":{"id":"43193"},"dimension":1,"ticker":null},"id":"43196","type":"Grid"},{"attributes":{"data_source":{"id":"43250"},"glyph":{"id":"43251"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43252"},"view":{"id":"43254"}},"id":"43253","type":"GlyphRenderer"},{"attributes":{"source":{"id":"43256"}},"id":"43260","type":"CDSView"},{"attributes":{"below":[{"id":"43223"}],"center":[{"id":"43226"},{"id":"43230"},{"id":"43283"},{"id":"43289"},{"id":"43295"},{"id":"43301"}],"height":331,"left":[{"id":"43227"}],"output_backend":"webgl","renderers":[{"id":"43281"},{"id":"43287"},{"id":"43293"},{"id":"43299"}],"title":{"id":"43304"},"toolbar":{"id":"43241"},"toolbar_location":null,"width":496,"x_range":{"id":"43181"},"x_scale":{"id":"43219"},"y_range":{"id":"43183"},"y_scale":{"id":"43221"}},"id":"43216","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"43185","type":"LinearScale"},{"attributes":{},"id":"43202","type":"UndoTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43257","type":"VBar"},{"attributes":{"source":{"id":"43268"}},"id":"43272","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43315"},"selection_policy":{"id":"43314"}},"id":"43256","type":"ColumnDataSource"},{"attributes":{},"id":"43314","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"43261","type":"Span"},{"attributes":{"text":"tau"},"id":"43276","type":"Title"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43263","type":"VBar"},{"attributes":{},"id":"43315","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43269","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"43274","type":"FixedTicker"},{"attributes":{"data_source":{"id":"43256"},"glyph":{"id":"43257"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43258"},"view":{"id":"43260"}},"id":"43259","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"43223"},"ticker":null},"id":"43226","type":"Grid"},{"attributes":{"callback":null},"id":"43238","type":"HoverTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43270","type":"VBar"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"43267","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43324"},"major_label_policy":{"id":"43325"},"ticker":{"id":"43302"}},"id":"43227","type":"LinearAxis"},{"attributes":{},"id":"43190","type":"BasicTicker"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43326"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43327"},"ticker":{"id":"43224"}},"id":"43223","type":"LinearAxis"},{"attributes":{"source":{"id":"43262"}},"id":"43266","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43317"},"selection_policy":{"id":"43316"}},"id":"43262","type":"ColumnDataSource"},{"attributes":{},"id":"43224","type":"BasicTicker"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43264","type":"VBar"},{"attributes":{"toolbar":{"id":"43341"},"toolbar_location":"above"},"id":"43342","type":"ToolbarBox"},{"attributes":{},"id":"43331","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"43273","type":"Span"},{"attributes":{},"id":"43332","type":"Selection"},{"attributes":{"data_source":{"id":"43262"},"glyph":{"id":"43263"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43264"},"view":{"id":"43266"}},"id":"43265","type":"GlyphRenderer"},{"attributes":{"source":{"id":"43290"}},"id":"43294","type":"CDSView"},{"attributes":{"axis":{"id":"43227"},"dimension":1,"ticker":null},"id":"43230","type":"Grid"},{"attributes":{"text":"mu"},"id":"43304","type":"Title"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43251","type":"VBar"},{"attributes":{"overlay":{"id":"43239"}},"id":"43233","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43319"},"selection_policy":{"id":"43318"}},"id":"43268","type":"ColumnDataSource"},{"attributes":{},"id":"43183","type":"DataRange1d"},{"attributes":{},"id":"43232","type":"PanTool"},{"attributes":{"children":[[{"id":"43180"},0,0],[{"id":"43216"},0,1]]},"id":"43340","type":"GridBox"},{"attributes":{},"id":"43231","type":"ResetTool"},{"attributes":{},"id":"43221","type":"LinearScale"},{"attributes":{},"id":"43316","type":"UnionRenderers"},{"attributes":{},"id":"43197","type":"ResetTool"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"43301","type":"Span"},{"attributes":{},"id":"43317","type":"Selection"},{"attributes":{},"id":"43237","type":"SaveTool"},{"attributes":{},"id":"43234","type":"WheelZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43336"},"selection_policy":{"id":"43335"}},"id":"43296","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"43240"}},"id":"43235","type":"LassoSelectTool"},{"attributes":{},"id":"43181","type":"DataRange1d"},{"attributes":{},"id":"43236","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"43231"},{"id":"43232"},{"id":"43233"},{"id":"43234"},{"id":"43235"},{"id":"43236"},{"id":"43237"},{"id":"43238"}]},"id":"43241","type":"Toolbar"},{"attributes":{"callback":null},"id":"43204","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"43295","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43307"},"major_label_policy":{"id":"43308"},"ticker":{"id":"43274"}},"id":"43193","type":"LinearAxis"},{"attributes":{},"id":"43203","type":"SaveTool"},{"attributes":{},"id":"43333","type":"UnionRenderers"},{"attributes":{"source":{"id":"43296"}},"id":"43300","type":"CDSView"},{"attributes":{},"id":"43334","type":"Selection"},{"attributes":{"children":[{"id":"43342"},{"id":"43340"}]},"id":"43343","type":"Column"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43330"},"selection_policy":{"id":"43329"}},"id":"43278","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"43283","type":"Span"},{"attributes":{"overlay":{"id":"43205"}},"id":"43199","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"43278"},"glyph":{"id":"43279"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43280"},"view":{"id":"43282"}},"id":"43281","type":"GlyphRenderer"},{"attributes":{},"id":"43200","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43286","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43285","type":"VBar"},{"attributes":{},"id":"43187","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43280","type":"VBar"},{"attributes":{"overlay":{"id":"43206"}},"id":"43201","type":"LassoSelectTool"},{"attributes":{},"id":"43318","type":"UnionRenderers"},{"attributes":{},"id":"43307","type":"BasicTickFormatter"},{"attributes":{},"id":"43319","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43279","type":"VBar"},{"attributes":{},"id":"43308","type":"AllLabels"},{"attributes":{"source":{"id":"43278"}},"id":"43282","type":"CDSView"},{"attributes":{"data_source":{"id":"43268"},"glyph":{"id":"43269"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43270"},"view":{"id":"43272"}},"id":"43271","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43332"},"selection_policy":{"id":"43331"}},"id":"43284","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43239","type":"BoxAnnotation"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"43255","type":"Span"}],"root_ids":["43343"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"c94f3212-a27a-46a8-ab8d-a13fff42c73b","root_ids":["43343"],"roots":{"43343":"a013ba88-d20d-4fe8-a685-eea09ebc5863"}}];
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