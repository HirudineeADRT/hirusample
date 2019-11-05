exports.handler = function(event, context, callback) {
    console.log("success")
    callback(null, {"message": "Successfully executed"});
}