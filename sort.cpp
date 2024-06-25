#include<iostream>
#include<bits/stdc++.h>
using namespace std;
void sum(int a,int b, void funtionTOcall(int))
{
    int sum=0;
    sum=a+b;
    funtionTOcall(sum);
}
void displayres(int data)
{
    cout<<"the result of sum is"<<data;
};
void displaypassiveres(int data)
{
    cout<<"the sum is"<<data;
};

int main()
{
    sum(3,4,displayres);
}