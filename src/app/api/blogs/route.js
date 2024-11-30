import DBCONNECT from "@/app/lib/DBconnect";
import blogmodel from "@/app/lib/Modelconnect";

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