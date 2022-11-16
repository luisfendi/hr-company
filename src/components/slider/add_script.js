function add_script(cdn, async = true, crossOrigin = "anonymos"){
  const script = document.createElement("script");
    script.src = cdn;
    script.async = async;
    script.crossOrigin = crossOrigin;
    document.body.appendChild(script);
    return script
}

export {add_script}