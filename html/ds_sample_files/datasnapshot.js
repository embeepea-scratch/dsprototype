(function ($) {
    $(document).ready(function () {
        "use strict";
        var setDates = {
            "Drought" : {
                "2001" : {
                    "05" : [
                        "15",
                        "22"
                    ],
                    "06" : [
                        "05"
                    ]
                },
                "2013" : {
                    "06" : [
                        "18"
                    ]
                }
            },
            "Snow" : {
                "2010" : {
                    "02" : [
                        "09"
                    ]
                }
            }
        };

        function generateLink () {
            var category,
                year,
                month,
                day,
                e;

            e = document.getElementById("nav-bar-category");
            category = e.options[e.selectedIndex].value;

            e = document.getElementById("nav-bar-year");
            year = e.options[e.selectedIndex].value;

            e = document.getElementById("nav-bar-month");
            month = e.options[e.selectedIndex].value;

            e = document.getElementById("nav-bar-day");
            day = e.options[e.selectedIndex].value;

            $("#nav-bar-link").attr("href", "/maps-data/data-snapshot/" + category + "/" + year + "/" + month + "/" + day);
        }

        function populateSelectLists () {
            var category,
                year,
                month,
                day,
                e;

            e = document.getElementById("nav-bar-category");
            category = e.options[e.selectedIndex].value;

            e = document.getElementById("nav-bar-year");
            year = e.options[e.selectedIndex].value;

            e = document.getElementById("nav-bar-month");
            month = e.options[e.selectedIndex].value;

            e = document.getElementById("nav-bar-day");
            day = e.options[e.selectedIndex].value;

            var i, j;
            var years = Object.keys(setDates[category]);

            if (years.indexOf(year) === -1) {
                year = years[years.length - 1];
            }

            var months = Object.keys(setDates[category][year]);

            if (months.indexOf(month) === -1) {
                month = months[months.length - 1];
            }

            var days = setDates[category][year][month];

            if (days.indexOf(day) === -1) {
                day = days[days.length - 1];
            }

            $("#nav-bar-year").children().each(function (i, e) {
                var val = $(this).val();
                if (years.indexOf(val) !== -1 ) {
                    $(this).removeClass("ds-disabled");
                    $(this).removeAttr("disabled");
                } else if (!$(this).hasClass("ds-disabled")) {
                    $(this).addClass("ds-disabled");
                    $(this).attr("disabled", "disabled");
                }
            });
            $("#nav-bar-month").children().each(function (i, e) {
                var val = $(this).val();
                if (months.indexOf(val) !== -1 ) {
                    $(this).removeClass("ds-disabled");
                    $(this).removeAttr("disabled");
                } else if (!$(this).hasClass("ds-disabled")) {
                    $(this).addClass("ds-disabled");
                    $(this).attr("disabled", "disabled");
                }
            });
            $("#nav-bar-day").children().each(function (i, e) {
                var val = $(this).val();
                if (days.indexOf(val) !== -1 ) {
                    $(this).removeClass("ds-disabled");
                    $(this).removeAttr("disabled");
                } else if (!$(this).hasClass("ds-disabled")) {
                    $(this).addClass("ds-disabled");
                    $(this).attr("disabled", "disabled");
                }
            });

            if ($("#nav-bar-year option:selected").attr("disabled")) {
                $("#nav-bar-year").val(year);
            }
            if ($("#nav-bar-month option:selected").attr("disabled")) {
                $("#nav-bar-month").val(month);
            }
            if ($("#nav-bar-day option:selected").attr("disabled")) {
                $("#nav-bar-day").val(day);
            }

            generateLink();
        }

        $("#nav-bar-category").change(generateLink);
        $("#nav-bar-year").change(generateLink);
        $("#nav-bar-month").change(generateLink);
        $("#nav-bar-day").change(generateLink);

        generateLink();

        $("#nav-bar-category").change(populateSelectLists);
        $("#nav-bar-year").change(populateSelectLists);
        $("#nav-bar-month").change(populateSelectLists);

        populateSelectLists();
    });
}(jQuery));

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .bind('click.bs.dropdown.data-api', clearMenus)
    .delegate('.dropdown form', 'click.bs.dropdown.data-api', function (e) { e.stopPropagation() })
    .delegate(toggle, 'click.bs.dropdown.data-api'  , Dropdown.prototype.toggle)
    .delegate(toggle + ', [role=menu]' , 'keydown.bs.dropdown.data-api', Dropdown.prototype.keydown)

}(window.jQuery);
