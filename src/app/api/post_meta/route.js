import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";

export async function POST (req, res) {
    
// ===========Insert One=======================

try {
    const prisma = new PrismaClient()
    const newUser = await prisma.post_meta.create({
       data: {
            email: 'Jhon@gmail.com',
            password: '123',
          }
      })
    console.log(newUser)
   }

catch(e){
   console.log(e)
}


// ===========Insert Many=======================


try {
    const prisma = new PrismaClient()
    const newUser = await prisma.post_meta.createMany({
       data: [
         {email: 'Jhon1@gmail.com', password: '123'},
         {email: 'Jhon2@gmail.com', password: '123'},
         {email: 'Jhon3@gmail.com', password: '123'}
       ],
     })
    console.log(newUser)
}
catch (e) {
    console.log(e)
}




// =============Inserting with Relations====================

    try {
        const prisma = new PrismaClient()
        const newUser = await prisma.post_meta.create({
            data: {
                email: 'Jhon@gmail.com',
                password: '123',
                profile:{
                    create:{
                        firstName:"Jhon",
                        lastName:"De",
                        mobile:"01700000000",
                        city:"Dhaka"
                    }
                }
            },
        })
        return NextResponse.json({newUser})
    }
    catch (e) {
        return NextResponse.json({e})
    }

}



export async function POST (req, res) {
    
    // =================findMany==============

    const userList = await prisma.post_meta.findMany();
    
    
    
    // ============findMany Where And Select=================
    
    const userList = await prisma.post_meta.findMany(
          {
           where: {email: "Alice@gmail.com"},
           select: {id: true}
          }
    );
    
    
    
    // ============findUnique by id=================
    
    const userList = await prisma.post_meta.findUnique(
       {
         where: {email: "Alice@gmail.com"},
         select: {id: true,email:true}
       }
    );
    
    
    
    // ============findFirst()=================
    
    const userList = await prisma.post_meta.findFirst();
    
    
    
    
    // ============find orderBy=================
    
    const userList = await prisma.post_meta.findMany(
        { orderBy: { id: "desc"} }
    );
    
    
    
    // ============Find Last using findFirst()=================
    
    const list = await prisma.post_meta.findFirst(
        {orderBy:{id:"desc"}}
    );
    
    
    
    // ===========Find With Limit Skip========================
    
    Retrieve the first 5 post_meta
    const list = await prisma.post_meta.findMany({
         take:5
    });
    
    
    Retrieve the next 5 post_meta
    const list = await prisma.post_meta.findMany({
       skip: 5,
       take: 5
    });
    
    Retrieve the last 5 post_meta
    const list = await prisma.post_meta.findMany({
        orderBy: {
            id: 'desc'
        },
        take: -5
    });
    
    
    // ===========Find With Relation========================
    
    const post_metaWithProfile = await prisma.post_meta.findMany({
         include: {profile: true}
    });
    console.log(post_metaWithProfile)
    
    
    const post_metaWithProfileAndPost = await prisma.post_meta.findMany({
         include: {profile: true,post:true},
    });
    console.log(post_metaWithProfileAndPost)
    
    
    
    // ===========Find With Nested Relations========================
    
    
    
    
    // ===========Find Filtering and Sorting With Nested Relations========================
    
    const post_metaWithFilteredPosts = await prisma.post_meta.findMany({
        include: {
            post: {
                where: {
                    title: {
                        contains: "Prisma"
                    }
                },
                orderBy: {
                    id: 'desc'
                }
            }
        }
    });
    
    console.log(post_metaWithFilteredPosts);
    
    
    
    // ===========Find Search========================
    
     const nameTerm = "Alice";
      const emailTerm = "example";
    
      const post_meta = await prisma.post_meta.findMany({
        where: {
          OR: [
            {
              name: {
                contains: nameTerm,
              },
            },
            {
              email: {
                contains: emailTerm,
              },
            },
          ],
        },
      });
    

}

export async function POST (req, res) {
    
    // ================Update===================

    try {
        const prisma = new PrismaClient()
        const updateUser = await prisma.post_meta.update({
           where: {id: 2},
           data: {email: 'Jhon1@gmail.com', password: '123'}
         })
        console.log(updateUser)
    }
    catch (e) {
        console.log(e)
    }
    
    
    
    // ================Delete===================
    
    try {
        const prisma = new PrismaClient()
        const updateUser = await prisma.post_meta.delete({
           where: {id: 2}
        })
        console.log(updateUser)
    }
    catch (e) {
        console.log(e)
    }

}

