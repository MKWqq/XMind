_promise.catch(e=>{
  console.log('e',e)
}).catch(e=>{
  console.log(222,e)
}).then(data=>{
  console.log('data',data)
})

setTimeout(function timeout () {
  console.log('timeout');
},0);
setImmediate(function immediate () {
  console.log('immediate');
});
