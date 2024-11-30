import blogmodel from "@/app/lib/Modelconnect"

export async function GET (res, {params})  {
    const {blogdetails} = await params
    const blog =  await blogmodel.findOne({_id : blogdetails})
    return Response.json(
        {
            blog,
            message: 'dynamic blog handle successfully'
        }
    )
}