"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { PlaidLinkOptions, PlaidLinkOnSuccess, usePlaidLink } from "react-plaid-link";
import { useRouter } from "next/navigation";
const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    const getLinkToken = async () => {
        const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);
  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      // await exchangePublicToken({
      //     publicToken : public_token,
      //     user
      // })
      router.push("/dashboard");
    },
    [user]
  );
  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open , ready} = usePlaidLink(config);
  return (
    <>
      {variant === "primary" ? (
        <Button onClick={() => open()} disabled={!ready} className="form-btn w-full my-2">Connect Bank</Button>
      ) : variant === "ghost" ? (
        <Button>Connect Bank</Button>
      ) : (
        <Button>Connect Bank</Button>
      )}
    </>
  );
};

export default PlaidLink;
