/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         // Replay from the beginning, regardless of current playing state 
         if (!sym.getSymbol("nubes2").isPlaying() ) {
         	sym.getSymbol("nubes2").play(0);
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'nubes'
   (function(symbolName) {   
   
   })("nubes");
   //Edge symbol end:'nubes'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-10622965");