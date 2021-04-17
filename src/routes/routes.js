// import modular routes
import webRoutes from "../modules/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/user/routes"
import articleRoutes from "../modules/article/routes"
import browseRoutes from "../modules/browse/routes"
import blogRoutes from "../modules/blog/routes"
import profileRoutes from "../modules/profile/routes"

export default [...webRoutes, ...authRoutes, ...userRoutes, ...articleRoutes, ...browseRoutes, ...blogRoutes, ...profileRoutes]
