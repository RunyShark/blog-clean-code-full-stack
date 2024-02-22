import { PrismaClient } from '@prisma/client';

export class PrismaService {
  constructor(private readonly prismaService: PrismaClient) {}

  get prisma() {
    return this.prismaService;
  }
}

export const prisma = new PrismaService(new PrismaClient()).prisma;
