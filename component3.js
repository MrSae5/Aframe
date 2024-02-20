AFRAME.registerComponent('hello', {
    schema: {
        message1: {type: 'string', default: 'Hello!'},
        caca: {type: 'string', default : 'Hallo!! >.<'}
      },

    init: function () {
        console.log(this.data.message1);
        console.log(this.data.caca);
    }
  });