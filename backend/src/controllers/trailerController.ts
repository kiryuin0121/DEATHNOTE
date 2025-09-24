import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getTrailers = async (req: Request, res: Response) => {
  try {
    const trailers = await prisma.trailer.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
    res.status(200).json({ trailers });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const getTrailer = async (req: Request, res: Response) => {
  const trailerId = req.params.id;
  try {
    const trailer = await prisma.trailer.findFirst({
      where: {
        id: trailerId,
      },
    });
    res.status(200).json({ trailer });
  } catch (error) {
    res.status(200).json({ error });
  }
};
export const createTrailer = async (req: Request, res: Response) => {
  const { url, title } = req.body;
  try {
    await prisma.trailer.create({
      data: {
        url,
        title,
      },
    });
    res.status(200).json({ message: "Trailer was created." });
  } catch (error) {
    res.status(500).json({ error });
  }
};
