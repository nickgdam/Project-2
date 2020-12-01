module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
      // The email cannot be null, and must be a proper email before creation
      post_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // The password cannot be null
      post_content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      post_tags: {
          type:DataTypes.STRING,
          allowNULL: true
      },
      user_id: {
          type: DataTypes.INTEGER,
          allowNULL: false
<<<<<<< HEAD
      }
      //  associate: function(models) {
      //   // We're saying that a Post should belong to an Author
      //   // A Post can't be created without an Author due to the foreign key constraint
      //   Post.belongsTo(models.user.User, {
      //     foreignKey: {
      //       allowNull: false
      //   }});
    }
=======
      },
       
>>>>>>> 802eafa45aac4e18e21982caadb94bb8f1ae5cc2
    });
    Post.associate =  function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: true
      }});
  }
    
    return Post;
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
};