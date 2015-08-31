var API = {
  'contacts:list': function() {
    return '/contacts';
  },
  'contacts:new': function() {
    return '/contacts/new';
  },
  'contacts:show': function(id) {
    return `/contacts/${id}`;
  }
};

var expr = function(name) {
  let arrity = API[name].length;
  let args = Array.apply(null, new Array(arrity)).map(function() {
    return ':id';
  });
  return API[name].apply(this, args);
};

module.exports = {
  el: 'app-module',
  components: {
    'sample-module': require('./components/sample-module/index.js')
  },
  template: require('./template.jade')(),
  data: {
    view: null,
    router: require('page')
  },
  created: function() {
    this.router(expr('contacts:list'), () => {
      this.view = 'contacts-module';
      this.$.contacts.listContacts();
    });
    this.router(expr('contacts:new'), () => {
      this.view = 'contacts-module';
      this.$.contacts.newContact();
    });
    this.router(expr('contacts:show'), (id) => {
      this.view = 'contacts-module';
      this.$.contacts.showContact(id);
    });
    this.router('/', '/contacts');

    this.router({
      hashbang: true
    });
  },
  methods: {
    navigate: function (name, event, ...args) {
      if (event !== undefined) {
        event.preventDefault();
      }
      this.$emit('navigate', name, ...args);
    },
    path: function(name, ...args) {
      return API[name].apply(this, args);
    }
  },
  events: {
    navigate: function(name, ...args) {
      this.router(this.path(name, ...args));
      return false;
    }
  }
};
