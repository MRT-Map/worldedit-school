// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="intro.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Basics</li><li class="chapter-item expanded "><a href="1-basics/1-select1.html"><strong aria-hidden="true">1.</strong> Selection 1 (//wand, p1/p2)</a></li><li class="chapter-item expanded "><a href="1-basics/2-set-replace.html"><strong aria-hidden="true">2.</strong> //set and //replace</a></li><li class="chapter-item expanded "><a href="1-basics/3-clipboard1.html"><strong aria-hidden="true">3.</strong> Clipboard 1 (//copy, //cut, //paste)</a></li><li class="chapter-item expanded "><a href="1-basics/4-clipboard2.html"><strong aria-hidden="true">4.</strong> Clipboard 2 (//flip, //rotate)</a></li><li class="chapter-item expanded "><a href="1-basics/5-stack.html"><strong aria-hidden="true">5.</strong> //stack</a></li><li class="chapter-item expanded "><a href="1-basics/6-fill.html"><strong aria-hidden="true">6.</strong> //fill and //fillr</a></li><li class="chapter-item expanded "><a href="1-basics/7-line-center.html"><strong aria-hidden="true">7.</strong> //line and //center</a></li><li class="chapter-item expanded "><a href="1-basics/8-move.html"><strong aria-hidden="true">8.</strong> //move</a></li><li class="chapter-item expanded "><a href="1-basics/9-undo-redo.html"><strong aria-hidden="true">9.</strong> //undo and //redo</a></li><li class="chapter-item expanded "><a href="1-basics/10-schematics.html"><strong aria-hidden="true">10.</strong> Schematics (//schem)</a></li><li class="chapter-item expanded "><a href="1-basics/11-size.html"><strong aria-hidden="true">11.</strong> //size</a></li><li class="chapter-item expanded "><a href="1-basics/12-tree.html"><strong aria-hidden="true">12.</strong> /tool tree and /tool deltree</a></li><li class="chapter-item expanded "><a href="1-basics/13-selection2.html"><strong aria-hidden="true">13.</strong> Selection 2 (//shift, //expand, //contract)</a></li><li class="chapter-item expanded "><a href="1-basics/14-quiz.html"><strong aria-hidden="true">14.</strong> Quiz</a></li><li class="chapter-item expanded "><a href="1-basics/15-conclusion.html"><strong aria-hidden="true">15.</strong> Conclusion</a></li><li class="chapter-item expanded affix "><li class="part-title">Intermediate</li><li class="chapter-item expanded "><a href="2-intermediate/masks.html"><strong aria-hidden="true">16.</strong> Masks</a></li><li class="chapter-item expanded "><a href="2-intermediate/patterns.html"><strong aria-hidden="true">17.</strong> Patterns</a></li><li class="chapter-item expanded "><a href="2-intermediate/stack.html"><strong aria-hidden="true">18.</strong> More on //stack</a></li><li class="chapter-item expanded "><a href="2-intermediate/liquids.html"><strong aria-hidden="true">19.</strong> Liquids (//drain, //fixwater, //fixlava)</a></li><li class="chapter-item expanded "><a href="2-intermediate/select.html"><strong aria-hidden="true">20.</strong> Selection Shapes</a></li><li class="chapter-item expanded "><a href="2-intermediate/snow-thaw.html"><strong aria-hidden="true">21.</strong> //snow and //thaw</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
