import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.special.findMany({
      include: { images: true },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const createPost = async (req: Request, res: Response) => {
  const { title, thumbnail, content, images } = req.body;
  try {
    await prisma.special.create({
      data: {
        title,
        thumbnail,
        content,
        images: {
          create: images,
        },
      },
    });
    res.status(200).json({ message: "created post" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
