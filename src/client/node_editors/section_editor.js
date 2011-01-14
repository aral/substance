var SectionEditor = Backbone.View.extend({
  events: {
    'keydown .property': 'updateNode'
  },
  
  initialize: function() {
    var that = this;
    this.render();
    
    this.$node = $('#' + app.document.selectedNode.html_id + ' > .content').attr('contenteditable', true);
    this.$node.unbind('keydown');
    
    this.$node.bind('keydown', function(event) {
      that.updateNode();
    });
  },
  
  updateNode: function(e) {
    var that = this;
    
    setTimeout(function() {
      var sanitizedContent = _.stripTags(that.$node.html());
      // Update HTML with sanitized content
      that.$node.html(sanitizedContent);
      app.document.updateSelectedNode({
        name: sanitizedContent
      });
    }, 5);
  },
  
  render: function() {
    // $(this.el).html(Helpers.renderTemplate('edit_section', app.editor.model.selectedNode.data));
  }
});