
if (WebAssembly) {
     // WebAssembly.instantiateStreaming is not currently available in Safari
     if (WebAssembly && !WebAssembly.instantiateStreaming) { // polyfill
         WebAssembly.instantiateStreaming = async (resp, importObject) => {
            const source = await (await resp).arrayBuffer();
             return await WebAssembly.instantiate(source, importObject);
         };
     }  
     const go = new Go();
     WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then((result) => {
          go.run(result.instance);
     });
} else {
   console.log("WebAssembly is not supported in your browser")
}
