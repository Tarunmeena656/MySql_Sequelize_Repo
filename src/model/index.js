const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('user_post_comment', 'root', 'Admin@1234',{
    host: 'localhost',
    dialect: 'mysql'
})

const connection = async () => {
        await sequelize.authenticate();     
}

const db = {};

db.connection = connection;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user-model')(sequelize);
db.posts = require('./post-model')(sequelize);
db.comments = require('./comment-model')(sequelize);
db.actors = require('./actor-model')(sequelize);
db.movies = require('./movie-model')(sequelize);


db.userPost = db.users.hasMany(db.posts);
db.posts.belongsTo(db.users);
db.posts.hasMany(db.comments);
db.comments.belongsTo(db.posts);

// many to many 
db.actors.belongsToMany(db.movies, {through: 'ActorMovies'});
db.movies.belongsToMany(db.actors, {through: 'ActorMovies'});



// polymorphic-association 

db.images = require('./polymorphic-association/image-model')(sequelize)
db.videos = require('./polymorphic-association/video-model')(sequelize);
db.polyComments = require('./polymorphic-association/comment-model')(sequelize);


// polymorphic-association relations

db.images.hasMany(db.polyComments, {
    foreignKey: 'commentableId',
    constraints: false,
    scope: {
        commentableType: 'image'
    }
})
db.polyComments.belongsTo(db.images, {
    foreignKey: 'commentableId',
    constraints: false,
})

db.videos.hasMany(db.polyComments, {
    foreignKey: 'commentableId',
    constraints: false,
    scope: {
        commentableType: 'video'
    }
})
db.polyComments.belongsTo(db.videos, {
    foreignKey: 'commentableId',
    constraints: false
})




db.sequelize.sync( { force : true })
    .then(() => {console.log('models synced successfully')})
    .catch((err) => {console.log(err.message)})

module.exports = db; 