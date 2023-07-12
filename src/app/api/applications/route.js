import connectMongo from "@/db/connect";
import Application from "@/db/models/application";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const params = request.nextUrl.searchParams;
        const status = params.get('status');
        const search = params.get('search');
        await connectMongo();
        // await Application.deleteMany({});
        const applications = await Application.find({
            "$or": [
                {name: {'$regex': search, '$options': 'i'}},
                {phone: {'$regex': search, '$options': 'i'}},
                {address: {'$regex': search, '$options': 'i'}},
            ],
            status: {'$regex': status, '$options': 'i'}
        }).sort('-createdAt');
        // const applications =  await Application.find();
        return NextResponse.json(applications);
    } catch (error) {
        return NextResponse.json(null, {status: 500});
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        await connectMongo();
        const application = await Application.create(data);
        return NextResponse.json(application);
    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}

export async function PATCH(request) {
    try {
        const ids = await request.json();
        const params = request.nextUrl.searchParams;
        const status = params.get('status');
        const search = params.get('search');
    
        await connectMongo();
    
        for await (const id of ids){
            await Application.findByIdAndUpdate(id, {status: ''});
        }

        const applications = await Application.find({
            "$or": [
                {name: {'$regex': search, '$options': 'i'}},
                {phone: {'$regex': search, '$options': 'i'}},
                {address: {'$regex': search, '$options': 'i'}},
            ],
            status: {'$regex': status, '$options': 'i'}
        }).sort('-createdAt');
        return NextResponse.json(applications);
    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}