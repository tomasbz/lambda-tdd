/**
 * test if value is equal
 *
 * @param event
 * @returns {number}
 */
testEqual = function (event)
{
  return event.val_1 + event.val_2;
}

/**
 * test if json is equal
 *
 * @param event
 * @returns {number}
 */
testJson = function (event)
{
  return {"val_1": event.val_1, "val_2": event.val_2, "sum": event.val_1 + event.val_2};
}

/**
 * @param event
 * @param context
 */
exports.handler = function( event, context )
{
  var returnData = {
    "testEqual": testEqual(event),
    "testJson": testJson(event)
  };

  context.succeed(returnData);
};