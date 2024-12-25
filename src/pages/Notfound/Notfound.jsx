import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const Notfound = () => {
    const navigate =useNavigate();
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
      <Card className="text-center shadow-lg max-w-lg">
        <CardHeader>
          <CardTitle>404 Not Found</CardTitle>
          <p className="text-gray-600">The page you are looking does not exist</p>
        </CardHeader>
        <CardContent>
          <img className="rounded-lg shadow-lg" src="https://img.freepik.com/free-vector/404-error-web-template-with-man_23-2147799286.jpg?semt=ais_hybrid" alt="404"/>
          <Button variant="outline" className="mt-5" onClick={() => navigate(-1)}>Go Back</Button>
        </CardContent>
      </Card>
    </div>
  );
};
