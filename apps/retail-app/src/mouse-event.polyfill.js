/**
 * Warning: Modification of this file
 * may prevent automatic updates of this project in the future.
 * More details: https://community.backbase.com/documentation/Retail-Apps/latest/web_app_upgradability_understand 
 */
if (!!window.MSInputMethodContext && !!document.documentMode || document.documentMode === 10) {
  function MouseEvent(eventType, params) {
    params = params || { bubbles: false, cancelable: false };
    var mouseEvent = document.createEvent('MouseEvent');
    mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    return mouseEvent;
  }

  MouseEvent.prototype = Event.prototype;

  window.MouseEvent = MouseEvent;
}
