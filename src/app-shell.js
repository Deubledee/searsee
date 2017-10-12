
    class AppShell extends Polymer.Element {
        static get is() {
          return 'app-shell';
        }
        static get properties() {
          return {
            page: {
              type: String,
              reflectToAttribute: true,
              observer: '_pageChanged',
              notify: true,
            },
            routeData: Object,
            subroute: Object,
            rootPath: String,
            someData: {
              type: String,
              value: '',
              notify: true,
            },
          };
        }
         static get observers() {
          return [
            '_routePageChanged(routeData.page)',
          ];
        }
        connectedCallback() {
          super.connectedCallback();
          if (window.performance && performance.mark)
            performance.mark('app-shell.connected');
        }
   _drToggle() {
          this.$.drawer.toggle()
        }
       _routePageChanged(page) {
          if (page === 'video' || page === 'searchYouTube' || page === 'channels') {
          this.page = 'youtube'
          } else {
            this.page = page || 'home';
          }
        }  
        _pageChanged(page) {
          var resolvedPageUrl = this.resolveUrl('routes/page-' + page + '.html');
          Polymer.importHref(
            resolvedPageUrl,
            null,
            null,
            true);
        }
      }  
      window.customElements.define(AppShell.is, AppShell);