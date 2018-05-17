import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  items:  DS.attr({ defaultValue: [] }),
  verified: DS.attr('boolean', { defaultValue: false }),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
