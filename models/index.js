const User = require('./User');
const Story = require('./Story');

User.hasMany(Story, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Story.belongsToMany(User, {
  foreignKey: 'user_id',
  onDelete:'CASCADE'
});

module.exports = { User, Project };
