import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  public readonly email: string;

  @IsString()
  @MinLength(8)
  public readonly password: string;

  @IsString()
  public readonly name: string;
}

export class LoginDto {
  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}
