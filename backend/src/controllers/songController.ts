import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getSongs = async (_req: Request, res: Response) => {
  try {
    const songs = await prisma.song.findMany({
      include: {
        artist: true,
        lyrics: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    res.status(200).json({ songs });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const createSong = async (req: Request, res: Response) => {
  const {
    title,
    imgUrl,
    audioUrl,
    album,
    artistId,
    artist,
    lyrics,
    releasedAt,
  } = req.body;

  try {
    await prisma.song.create({
      data: {
        title,
        imgUrl,
        audioUrl,
        album,
        releasedAt,
        artist: artistId ? { connect: { id: artistId } } : { create: artist },
        lyrics: {
          create: lyrics,
        },
      },
    });
    res.status(200).json({ message: "created song" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteSong = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.song.delete({
      where: { id: id },
    });
    res.status(200).json({ message: "deleted song" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
