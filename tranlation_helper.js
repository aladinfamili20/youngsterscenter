var TranslationHelper = (function () {
    // add other logic as described above for storing and retrieving language setting from cookie
    function Init() {
      // initialize polyglot with the set of phrases
      Translate()
    }
    function Translate() {
      $("[data-phrase]").each(function () {
        $(this).html(polyglot.t(this.dataset.phrase))
      });
    }
    return {
      Init: Init,
      Translate: Translate
    };
  }());