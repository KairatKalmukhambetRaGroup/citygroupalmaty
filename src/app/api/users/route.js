import connectMongo from "@/db/connect";
import User from "@/db/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function PUT(request) {
    try {
        const {email, password} = await request.json();
        await connectMongo();

        const existingUser = await User.findOne().or([{login: email},{email: email}]);
        if(!existingUser)
            return NextResponse.json("404", {status: 404});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCorrect)
            return NextResponse.json("pass", {status: 404});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.TOKEN_KEY, {expiresIn: '60d'});

        return NextResponse.json({user: existingUser, token});

    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}

export async function POST(request) {
    try {
        const {email, password, login} = await request.json();
        await connectMongo();

        const existingUser = await User.findOne({
            "$or": [
                {login: login},
                {email: email}
            ]
        });
        if(existingUser)
            return NextResponse.json("User already exist.", {status: 409});

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({login, email, password: hashedPassword});

        return NextResponse.json(user);

    } catch (error) {
        return NextResponse.json(error, {status: 500});
    }
}