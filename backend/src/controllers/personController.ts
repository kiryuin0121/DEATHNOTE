import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getPersons = async (_req: Request, res: Response) => {
  try {
    const persons = await prisma.person.findMany({
      include: {
        character: {
          include: {
            images: true,
          },
        },
        cast: true,
      },
      orderBy: {
        serial: "asc",
      },
    });
    res.status(200).json({ persons });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const getPerson = async (req: Request, res: Response) => {
  const personId = req.params.id;
  try {
    const person = await prisma.person.findFirst({
      where: {
        id: personId,
      },
      include: {
        character: {
          include: {
            images: true,
          },
        },
        cast: true,
      },
    });
    res.status(200).json({ person });
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const createPerson = async (req: Request, res: Response) => {
  const { size, top, left, serial, character, cast } = req.body;
  try {
    await prisma.person.create({
      data: {
        size: size,
        top: parseInt(top),
        left: parseInt(left),
        serial: parseInt(serial),
        character: {
          create: {
            name: character.name,
            url: character.url,
            description: character.description,
            images: {
              create: character.images,
            },
          },
        },
        cast: {
          create: {
            name: cast.name,
            profile: cast.profile,
            comment: cast.comment,
          },
        },
      },
    });
    res.status(200).json({ message: "created person" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
