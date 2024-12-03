import DBCONNECT from "@/lib/DBconnect";
import blogmodel from "@/lib/Modelconnect";

export async function GET(req) {
    try {
        await DBCONNECT();
        const blogs = await blogmodel.find();

        return new Response(
            JSON.stringify({
                blogs,
                message: 'Blogs fetched successfully',
            }),
            {
                status: 200, // HTTP Status code
                headers: {
                    "Content-Type": "application/json", // Specify JSON content type
                },
            }
        );
    } catch (err) {
        console.log('Error during api get method >>', err);
        return new Response(
            JSON.stringify({
                message: 'Failed to fetch blogs',
                error: err.message, // Actual error message
            }),
            {
                status: 500, // Internal Server Error
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}
