// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models

module.exports = (mongoose, Mongoose) => {
  // This section contains the properties of your model, mapped to your collection's properties.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const schema = Mongoose.Schema({
    'email': String,
    'account': {
      'username': String,
    },
    'newsletter': Boolean,
    'token': String,
    'hash': String,
    'salt': String,
  }, {
    timestamps: false,
  });

  return mongoose.model('users', schema, 'users');
};
