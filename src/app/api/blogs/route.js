import DBCONNECT from "@/lib/DBconnect";
import blogmodel from "@/lib/Modelconnect";

export async function GET (res) {
    DBCONNECT();
    const blogs = await blogmodel.find();
    return Response.json(
        {
            blogs,
            message: 'blogs fetched successfully'
        }
    )
}