import { NextRequest, NextResponse } from "next/server"
import { userService } from "./services/user.service";
import { Roles } from "./contants/roles";

export const proxy = async (request : NextRequest)=>{
    // console.log("Hello from proxy ", request.url)

    const pathname = request.nextUrl.pathname;

    let isAuthenticated = false;
    let isAdmin   = false;
    let isStudent = false;
    let isTutor = false;

    const {data} = await userService.getSession();

    if(data){
        isAuthenticated = true;
        isAdmin = data.user.role === Roles.admin;
        isStudent = data.user.role === Roles.student;
        isTutor = data.user.role === Roles.tutor;
    }

    if(!isAuthenticated){
        return NextResponse.redirect(new URL('/login', request.url))
    }


    if(!isAdmin && pathname.startsWith('/admin')){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(!isStudent && pathname.startsWith('/dashboard')){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(!isTutor && pathname.startsWith('/tutor')){
        return NextResponse.redirect(new URL('/login', request.url))
    }




        return NextResponse.next()
}

export const config = {
    matcher : ['/dashboard/:path*','/tutor/:path*','/admin/:path*']
}