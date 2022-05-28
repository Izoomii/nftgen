/*
  Warnings:

  - A unique constraint covering the columns `[model,bg,clothes,face,hat]` on the table `avatar` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "avatar_model_bg_clothes_face_hat_key" ON "avatar"("model", "bg", "clothes", "face", "hat");
