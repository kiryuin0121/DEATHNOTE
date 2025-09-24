import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";

/**
 *1ページ分の記事一覧を取得する関数
 */
export const getPosts = async (req: Request, res: Response) => {
  // 取得するページのページ番号
  const page = Number(req.query.page);
  // 1ページあたりの取得件数
  const limit = Number(req.query.limit);
  // スキップする件数
  const offset = (page - 1) * limit;

  try {
    const posts = await prisma.news.findMany({
      skip: offset,
      take: limit,
      orderBy: { createdAt: "desc" },
    });
    // 記事の総件数
    const totalPost = await prisma.news.count();
    // ページの総数
    const totalPage = Math.floor(totalPost / limit);
    res.status(200).json({ posts, totalPage, totalPost });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
/**
 *記事単体の情報を取得する関数
 */
export const getPost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  try {
    const post = await prisma.news.findFirst({
      where: {
        id: postId,
      },
    });
    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
